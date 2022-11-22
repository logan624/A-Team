import user from "../model/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await user.findAll();
        res.json(users);
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getUserById = async (req, res) => {
    try {
        const userToSend = await user.findAll({
            where: {username: req.params.username}
        });
        res.json(userToSend[0]);
    } catch (error) {
        res.json({message: error.message});
    }
}