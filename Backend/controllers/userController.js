import User from "../models/userModel"

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send("Error")
    }
}

const createUser = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).send({ message: "Name is required" });
        }
        const user = new User({ name });
        await user.save();
        res.status(201).send(user);

    } catch (error) {
        res.status(500).send("Error")
    }
}

export { getAllUsers, createUser }