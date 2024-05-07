import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DeskNav = () => {
  return (
    <Link href="/" className='md:h-32 border-b border-zinc-900 md:border-transparent h-20 md:mx-20 mx-10 py-4 flex justify-start items-center ' >
        <Image className='md:h-28 md:w-32 h-16 w-16 rounded-2xl mt-3'  src={`/commune.gif`} height={750} width={750} alt='navbarimage' />

        {/* <div className='bg-zinc-700 md:px-4 md:py-2 px-2 py-2 rounded-md bg-opacity-30' >
            <p className='text-white md:text-sm text-[12px] md:font-normal font-light' >Signup</p>
        </div> */}
      
    </Link>
  )
}

export default DeskNav
