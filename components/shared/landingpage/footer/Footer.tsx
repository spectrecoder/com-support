import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
      <div className='absolute bottom-0 right-5 flex gap-3 mb-3'>
        <Link href={'https://discord.com/invite/communeai'}><Image src={'/discord.png'}
        className='rounded-lg'
        height={35}
        width={35}
        alt="logoimage"></Image></Link>
         <Link href={'https://web.telegram.org/k/#@communecommunity'}><Image src={'/telegram.png'}
        className='rounded-lg'
        height={35}
        width={35}
        alt="logoimage"></Image></Link>
        <Link href={'https://twitter.com/communeaidotorg'}> <Image src={'/twitter.jpg'}
        className='rounded-lg'
        height={35}
        width={35}
        alt="logoimage"></Image></Link>
        <Link href={'https://github.com/commune-ai'}> <Image src={'/github.png'}
        className='rounded-lg'
        height={35}
        width={35}
        alt="logoimage"></Image></Link>

      </div>
    </div>
  )
}

export default Footer
