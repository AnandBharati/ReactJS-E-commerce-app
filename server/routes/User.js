import { addProfile, fetchProfileByUsername } from "../controller/UserController.js";

import { Router } from 'express'

const router = Router();

router.post('profile', addProfile)

router.get('/profile/:username', fetchProfileByUsername)

//update profile

//delete profile

export default router