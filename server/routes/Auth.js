import {Router} from 'express'

const router = Router();

router.get('/', (req, res)=>{
    res.status(200).json({
        msg: 'this is from auth route'
    })
})

export default router;