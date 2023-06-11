import React, { useState } from 'react'


function UserProvider() {
    const [userProfile, setUserProfile] = useState({
        username: '',
        email: '',
        firstame: '',
        lastname: '',
        dob: '',
        addressline1: '',
        addressline2: '',
        city: '',
        country: '',
        pincode: '',
    });

    const signup = (user)=>{
      
    }

    const signin = ({username, password}) =>{

    }

    const updateUser = (user)=>{

    }

  return (
    <div>UserProvider</div>
  )
}

export default UserProvider