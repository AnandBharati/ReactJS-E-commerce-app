import React, { useContext, useState } from 'react'
import apiUrl from '../helpers/API_URL'
import { UserContext } from './UserContext'

export function USERS() {
  const userContext = useContext(UserContext);
  return userContext;
}


function UserProvider({ children }) {
  const [userProfile, setUserProfile] = useState({});
  const [authInfo, setAuthInfo] = useState({})
  const [isloggedin, setIsloggedin] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");



  const signup = async (user) => {
    setIsLoading(true);
    setIsError(false);
    return fetch(`${apiUrl}/auth/signup`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then((res) => res.json())
      .then((json) => {
        console.log({ json })
        if (json.success) {
          setIsLoading(false)
          setErrorMsg("")
          setIsError(false)
          setAuthInfo(json.data)
        }
        else {
          throw new Error(json.error)
        }
      }).catch((err) => {
        setIsLoading(false)
        setIsError(true)
        setErrorMsg(err.message)
      })
  }


  const login = ({ username, password }) => {
    setIsLoading(true);
    setIsError(false);
    setErrorMsg("");
    console.log("apiUrl", apiUrl)
    fetch(`${apiUrl}/auth/login`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password })
    })
      .then((res) => res.json())
      .then((result) => {
        result.success && setIsloggedin(true)
        result.success && setUserProfile(result.data)
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
        setErrorMsg(e.message)
      })
  }

  const logout = () => {
    console.log('logout funtion called');
    setIsloggedin(false);
    setUserProfile({});
  }

  const updateUser = (user) => {
    //todo
  }


  const valueToReturn = {
    userProfile,
    authInfo,
    isLoading,
    isError,
    errorMsg,
    isloggedin,
    signup,
    login,
    logout,
    setErrorMsg,
    setIsloggedin
  }

  return (
    <UserContext.Provider value={valueToReturn}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider