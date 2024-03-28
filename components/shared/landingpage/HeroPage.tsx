import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'
import DeskNav from './navigations/DeskNav'
import { Button } from '@/components/ui/button'
import { ArrowRight, Radio, Sparkle, Sparkles } from 'lucide-react'
import Image from 'next/image'

const HeroPage = () => {
  return (
    <div className="min-h-screen w-full bg-black bg-dot-white/[0.1] ">
    <Spotlight
      className="top-0 left-0 md:left-60 md:-top-20"
      fill="white"
    />
    <DeskNav/>
    

    {/* heronavbar */}
   <div className='min-h-24 w-full flex flex-col justify-center items-center' >
    <div className='px-4 py-2 border-[1px] border-zinc-700 flex justify-center items-center cursor-pointer rounded-full gap-3 mt-16' >
      <Radio className='text-red-200 animate-pulse' strokeWidth={1} />
      <p className='text-red-200 font-light text-sm' >Access Before April</p>
      <ArrowRight className='text-red-200' strokeWidth={1} />
    </div>
    <h1 className='bg-gradient-to-r from-white via-zinc-300 to-zinc-950 text-transparent bg-clip-text md:text-5xl text-3xl font-semibold mt-8 text-center tracking-normal leading-tight' >Empower Your Success</h1>
    <h1 className='bg-gradient-to-r from-white via-zinc-300 to-zinc-950 text-transparent bg-clip-text md:text-5xl text-3xl mt-4 font-semibold tracking-normal leading-tight text-center' > Transform Your Ideas  </h1>
    
    <h1 className='text-white md:text-5xl text-3xl mt-4 font-semibold tracking-normal leading-tight text-center' > <span className='bg-gradient-to-r from-red-400 via-red-200 to-zinc-950 text-transparent bg-clip-text' >   Effortlessely With The help.ai</span>  </h1>
    
    <p className='text-zinc-500 mt-8 text-center  ' >An operating system for students to master difficult concepts, <br /> ace tests, and write with confidence.</p>

      <div className='h-16 bg-zinc-900 border-[1px] border-zinc-800 rounded-xl mt-8 flex justify-between items-center md:px-4 px-10 gap-4' >
        <p className='text-zinc-400 font-light text-sm md:block hidden' >Captions , Cover letter , roadmap and may more</p>

        <Button className='md:bg-red-400 bg-transparent text-white  md:text-black hover:bg-zinc-900 hover:text-white' >
          <Sparkles className='mr-1 hover:text-white' size={17} strokeWidth={1.4} />
          Genreate With HelpAi
        </Button>

      </div>

    <div className='' >
        <Image className='h-[600px] w-auto '  src={`/hero.svg`} height={1500} width={1500}alt='heroimage' />
    </div>
   </div>

   {/* other sections */}



  </div>
  )
}

export default HeroPage
