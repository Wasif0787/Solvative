import User from "../models/userModel.js";
import Reward from "../models/rewardModel.js";

const transaction = async (req, res) => {
    try {
        const { recipientUserId, points, userId } = req.body; // Extract userId from the request body
        console.log(userId);
        const currentUser = await User.findById(userId);
        if (!currentUser) {
            return res.status(404).json({ error: "Current user not found" });
        }

        const pointsInt = parseInt(points, 10);
        if (pointsInt <= 0 || pointsInt > 100 || pointsInt > currentUser.P5balance) {
            return res.status(400).json({ error: "Invalid transaction points" });
        }

        const recipientUser = await User.findById(recipientUserId);
        if (!recipientUser) {
            return res.status(404).json({ error: "Recipient user not found" });
        }

        currentUser.P5balance -= pointsInt;
        recipientUser.rewards += pointsInt;

        await currentUser.save();
        await recipientUser.save();

        const reward = new Reward({
            points: pointsInt,
            givenBy: currentUser._id,
            givenTo: recipientUser._id
        });
        await reward.save();

        res.status(200).json(currentUser);
    } catch (error) {
        res.status(500).send("Error");
    }
}

export { transaction };
