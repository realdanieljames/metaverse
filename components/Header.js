import React from 'react'
import Image from "next/image"
import Avatar from "../components/Avatar"
import {useMoralis} from "react-moralis"



function Header() {
  return (

      <div>
          <div className=''>
              <div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
                  <Image
                    layout='fill'
                    className='rounded-full object-cover'
                    src="https://links.papareact.com/3pi"
                  />
              </div>
              <div>
                  <div>

                   {/* AVATAR */}
                   <Avatar logoutOnPress/>
                  </div>

                   {/* WELCOME MESSAGE */}
                   {/* USERNAME */}
                   {/* CHANGE USERNAME COMPONENT */}
              </div>
          </div>
                 
        
  </div> 
      )
}

export default Header
