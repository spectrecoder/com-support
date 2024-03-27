import Image from 'next/image'
import React from 'react'

const DeskNav = () => {
  return (
    <div className='h-28   mx-20 flex justify-between items-center ' >
        <Image className='h-28 w-32'  src={`/logo.svg`} height={900} width={900} alt='navbarimage' />

        <div className='bg-zinc-700 px-4 py-2 rounded-md bg-opacity-30' >
            <p className='text-white' >Signup</p>
        </div>
      
    </div>
  )
}

export default DeskNav
