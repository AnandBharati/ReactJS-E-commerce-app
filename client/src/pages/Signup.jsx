import React, { useEffect, useState } from 'react'
import { MODEL } from '../ContextApi/ModelProvider'
import './Signup.css'
import { USERS } from '../ContextApi/UserProvider';
import { useNavigate } from 'react-router-dom'

function Signup() {
    const {
        userProfile,
        authInfo,
        isLoading,
        isError,
        errorMsg,
        setErrorMsg,
        isloggedin,
        signup,
    } = USERS();
    const { isSignupOpen, setIsSignupOpen, isLoginOpen, setIsLoginOpen } = MODEL()
    const [signupDetail, setSignupDetail] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [cnfmPassword, setCnfmPassword] = useState('');
    const navigate = useNavigate()

    //to close form
    useEffect(() => {
        if (authInfo.username) {
            setIsSignupOpen(false);
            setIsLoginOpen(true);
        }
    }, [authInfo])

    async function submitHandler(e) {
        e.preventDefault();
        let field = ""
        signup(signupDetail);
    }

    if (!isSignupOpen) return null;
    return (
        <div className='signup-container fullscreen'>

            <form onSubmit={submitHandler}>
                <h1>Signup</h1>
                {errorMsg && <h2 style={{ color: 'red' }}>{errorMsg}</h2>}
                <label htmlFor="username"> Username <br />
                    <input type="text" required id='username' value={signupDetail.username} onChange={(e) => setSignupDetail({ ...signupDetail, username: e.target.value })} />
                </label>
                <label htmlFor="email"> Email <br />
                    <input type="text" id='email' value={signupDetail.email} onChange={(e) => setSignupDetail({ ...signupDetail, email: e.target.value })} />
                </label>
                <label htmlFor="password"> Password <br />
                    <input type="text" id='password' value={signupDetail.password} onChange={(e) => setSignupDetail({ ...signupDetail, password: e.target.value })} />
                </label>
                <label htmlFor="cnfmPassword"> Confirm Password <br />
                    <input type="text" id='cnfmPassword' value={cnfmPassword} onChange={(e) => setCnfmPassword(e.target.value)} />
                </label>

                <input type="submit" value={isLoading ? "Please wait..." :"SIGN UP"} />
            </form>
        </div>
    )
}

export default Signup