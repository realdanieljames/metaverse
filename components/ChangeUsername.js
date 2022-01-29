import React from 'react'
import {useMoralis} from "react-moralis"


function ChangeUsername() {

    // setUserData- funcrtion for setting the user's information
    // isUserUpdating - helps to block user from spamming the button
    // userEeror - provides an error if anything goes wrong while updating user 
    // user - user object
    // CMD + Click to see details in vs code
    const {setUserData, isUserUpdating, userError, user} = useMoralis()


    const setUsername = ()=>{
        const username = prompt(`ENTER YOUR NEW USERNAME! 
        (Your current Username is: ${user.getUsername()}) `);
        if(!username) return;

        setUserData({
            username,
        })
    }

  return (
  <div className='text-cm absolute top-5 right-5'>
      <button 
      // if user is updating - disable the button
      disabled={isUserUpdating}
      onClick={setUsername}
      className='text-pink-700'>Change Your Username</button>
  </div>
  )
}

export default ChangeUsername
