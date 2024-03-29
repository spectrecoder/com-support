import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'
import DeskNav from './navigations/DeskNav'
import { Button } from '@/components/ui/button'
import { ArrowRight, Dot, Radio, Sparkle, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const HeroPage = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950  ">
    <Spotlight
      className="top-0 left-0 md:left-60 md:-top-20"
      fill="white"
    />
    <DeskNav/>
    

    {/* heronavbar */}
   <div className='min-h-24 w-full flex flex-col justify-center items-center' >
    <div className='px-4 py-2 border-[1px] border-zinc-900 flex justify-center items-center cursor-pointer rounded-full gap-3 mt-16' >
     <div className='h-2 w-2 relative  animate-ping bg-green-300 rounded-full flex items-center justify-center' >
      <div className='absolute h-2  w-2 bg-blue-500 animate-spin' >

      </div>
     </div>
      <p className='text-white font-light text-[12px]' >Access Before April</p>
      <ArrowRight className='text-white ' strokeWidth={1} size={15} />
    </div>
    <h1 className='bg-gradient-to-r from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text md:text-6xl text-3xl font-bold mt-8 text-center tracking-normal leading-tight' >Seamlessly sync articles</h1>
    <h1 className='bg-gradient-to-r from-white via-zinc-300 to-zinc-500 text-transparent bg-clip-text md:text-6xl text-3xl mt-4 font-bold tracking-normal leading-tight text-center' > and feeds from the web.  </h1>
    
  
    
    <p className='text-zinc-500 mt-8 text-center  ' >An operating system for students to master difficult concepts, <br /> ace tests, and write with confidence.</p>

      <Link href={`/services`} >
      <div className='h-16 bg-zinc-950 border-[1px] border-zinc-800 rounded-xl mt-8 flex justify-between items-center md:px-4 px-10 gap-4' >
        <p className='text-zinc-400 font-light text-sm md:block hidden' >Captions , Cover letter , roadmap and may more</p>

        <Button className='md:bg-zinc-900 bg-transparent text-white  md:text-white hover:bg-zinc-900 hover:text-white' >
          <Sparkles className='mr-1 hover:text-white' size={17} strokeWidth={1.4} />
          Genreate With HelpAi
        </Button>

      </div></Link>

    <div className='' >
        <Image className='h-[600px] w-auto '  src={`/hero.svg`} height={1500} width={1500}alt='heroimage' />
    </div>
   </div>

   {/* other sections */}



  </div>
  )
}

export default HeroPage
