// import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis'

function Login() {
  const { authenticate } = useMoralis()
  return (
    <div className="relative bg-black">
      <h1>I am Logonono in Screen</h1>
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4">
        {/* LOGO */}
        <Image
          className="rounded-full object-cover"
          src="https://links.papareact.com/3pi"
          height={200}
          width={200}
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={authenticate}
          className="animate-pulse rounded-lg bg-yellow-500 p-5 font-bold"
        >
          Login To the METAVERSE
        </button>
      </div>

      <div className="h-screen w-full">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
        {/* LOGIN FORM */}
      </div>
    </div>
  )
}

export default Login
 