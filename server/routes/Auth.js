import { Router } from 'express'
import { authModel } from '../schema/Auth.js';


const router = Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const result = await authModel.findOne({ username })
    if (result && result.password)
      return  res.status(200).json({ authstatus: true })
    res.status(202).json({ authstatus: false })
})

router.post('/signup', async (req, res) => {
    console.log('inside signup')
    const { username, password } = req.body;
    if (username) {
        const auth = await new authModel({ username, password });
        const result = await auth.save();
        res.json(200).json(result);
    }
    else
        res.json(202).json({ error: 'error occured' })
})

export default router;