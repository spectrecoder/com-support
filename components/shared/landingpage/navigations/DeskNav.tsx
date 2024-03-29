import Image from 'next/image'
import React from 'react'

const DeskNav = () => {
  return (
    <div className='md:h-28 border-b border-zinc-900 md:border-transparent h-20 md:mx-20 mx-10 flex justify-between items-center ' >
        <Image className='md:h-28 md:w-32 h-20 w-20'  src={`/logo.svg`} height={900} width={900} alt='navbarimage' />

        <div className='bg-zinc-700 md:px-4 md:py-2 px-2 py-2 rounded-md bg-opacity-30' >
            <p className='text-white md:text-sm text-[12px] md:font-normal font-light' >Signup</p>
        </div>
      
    </div>
  )
}

export default DeskNav
