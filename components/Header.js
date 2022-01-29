import React from 'react'
import Image from "next/image"
import Avatar from "../components/Avatar"
import ChangeUsername from "../components/ChangeUsername"
import {useMoralis} from "react-moralis"




function Header() {
    const {user} =useMoralis();
  return (

      <div className='text-pink-500'>
          <div className=''>
              <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
                  <Image
                    layout='fill'
                    className='rounded-full object-cover'
                    src="https://links.papareact.com/3pi"
                  />
              </div>
              <div className='text-left lg:text-center'>
                  <div className='relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full'>

                   {/* AVATAR */}
                   <Avatar logoutOnPress/>
                  </div>

                   {/* WELCOME MESSAGE */}
                <h1 className='text-3xl'>Welcome to The Daniel James Metaverse</h1>
                <h2 className='text-5xl font-bold truncate'>{user.getUsername()}</h2>
                   {/* USERNAME */}
                   {/* CHANGE USERNAME COMPONENT */}
                   <ChangeUsername />

              </div>
          </div>
                 
        
  </div> 
      )
}

export default Header
