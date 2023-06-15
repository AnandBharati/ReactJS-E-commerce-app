import { userModel } from "../schema/User.js";

export const addProfile = async (req, res) => {
    const { username } = req.body;
    const result = await userModel.find({ username })
    res.status(200).json(result)
}

export const fetchProfileByUsername = async (req, res) => {
    const username = req.params.username;
    const result = userModel.find({ username });
    res.status(200).json(result);
}