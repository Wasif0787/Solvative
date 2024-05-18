import User from "../models/userModel.js"

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
        console.log(name);
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

const viewUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if (!user) return res.status(400).json({ error: "User not found" })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send("Error")
    }
}

const updateuser = async (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body
        let user = await User.findById(id)
        if (!user) return res.status(400).json({ error: "User not found" })
        user.name = name || user.name
        user = await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send("Error")
    }
}


export { getAllUsers, createUser, viewUser, updateuser }