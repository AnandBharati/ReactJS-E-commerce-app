import { authModel } from '../schema/Auth.js'

export const login = async (req, res, next) => {
    console.log('inside login')
    const { username, password } = req.body;
    console.log(req.body)
    if (!username || !password) {
        const err = new Error('invald username or password')
        next(err)
    }
    else {
        console.log('inside else')
        try {
            const result = await authModel.findOne({ username })
            if (result && result.password === password) res.status(200).json({ success: true, data: result })
            else  res.status(401).json({ success: false, error: 'password does not match' })
        } catch (error) {
            res.status(400).json({ success: false })
        }
    }
}

export const signup = async (req, res, next) => {
    // console.log('inside signup')
    const { username, email, password } = req.body;
    // console.log(req.body)
    if (username && email && password) {
        try {
            //check if user already exist
            const user = await authModel.findOne({ username })
            if (user) return res.status(400).json({ success: false, error: 'user already exist' })

            //registering new user
            const auth = new authModel({ username, email, password });
            const result = await auth.save();
            // console.log(result)
            return res.status(200).json({
                success: true, data: {
                    username: result.username,
                    email: result.email,
                }
            });
        } catch (error) {
            console.log('in catch')
            // res.status(400).json(error)
            next(error)
        }
    }
    // console.log('from else ')
    return res.status(400).json({ success: false, error: "something went wrong" })
}

