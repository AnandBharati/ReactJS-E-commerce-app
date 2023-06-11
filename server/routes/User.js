import { userModel } from "../schema/User.js";
import { Router } from 'express'

const router = Router();

router.post('profile', async (req, res) => {
    const { username } = req.body;
    const result = await userModel.find({ username })
    res.status(200).json(result)
})

router.get('/profile/:username', async (req, res) => {
    const username = req.params.username;
    const result = userModel.find({ username });
    res.status(200).json(result);
})

//update profile

//delete profile

export default router