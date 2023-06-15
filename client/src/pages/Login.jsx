import { useEffect, useState } from 'react';
import { MODEL } from '../ContextApi/ModelProvider'
import './Login.css'
import { USERS } from '../ContextApi/UserProvider';

function Login() {
  const {
    userProfile,
    isLoading,
    isError,
    errorMsg,
    setErrorMsg,
    isloggedin,
    login,
  } = USERS();
  const { isLoginOpen, setIsLoginOpen } = MODEL();
  const [loginDetail, setLoginDetail] = useState({
    username: '',
    password: '',
  })

  //close login page if user is logged in
  useEffect(() => {
    isloggedin && setIsLoginOpen(false)
  }, [isloggedin])

  const loginHandler = (e) => {
    e.preventDefault()
    login(loginDetail)
  }



  if (!isLoginOpen) return null;
  return (
    <div className='login-container fullscreen'>
      <form onSubmit={loginHandler}>
        <h1>Login</h1>
        <label htmlFor="username"> Username <br />
          <input type="text" required id='username' value={loginDetail.username} onChange={(e) => setLoginDetail({ ...loginDetail, username: e.target.value })} />
        </label>
        <label htmlFor="password"> Password <br />
          <input type="text" id='password' value={loginDetail.password} onChange={(e) => setLoginDetail({ ...loginDetail, password: e.target.value })} />
        </label>

        <input type="submit" value={isLoading ? "Please wait..." : "Login"} />
      </form>

    </div>
  )
}

export default Login