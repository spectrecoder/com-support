import { Spotlight } from '@/components/ui/Spotlight'
import React from 'react'
import DeskNav from './navigations/DeskNav'
import { Button } from '@/components/ui/button'
import { ArrowRight, Radio } from 'lucide-react'

const HeroPage = () => {
  return (
    <div className="min-h-screen w-full bg-black bg-grid-white/[0.03]">
    <Spotlight
      className="top-0 left-0 md:left-60 md:-top-20"
      fill="white"
    />
    <DeskNav/>
    

    {/* heronavbar */}
   <div className='min-h-24 w-full flex flex-col justify-center items-center' >
    <div className='px-4 py-2 border-[1px] border-zinc-700 flex justify-center items-center cursor-pointer rounded-full gap-3 mt-28' >
      <Radio className='text-red-200 animate-pulse' strokeWidth={1} />
      <p className='text-red-200 font-light' >Access Before April</p>
      <ArrowRight className='text-red-200' strokeWidth={1} />
    </div>
    <h1 className='text-white text-5xl font-semibold mt-8' >Empower Your Success</h1>
    <h1 className='text-white text-5xl mt-4 font-semibold text-center' > Transform Your Ideas <span className='text-blue-400' >   With help.ai</span> </h1>
    <p className='text-zinc-500 mt-8 text-center ' >An operating system for students to master difficult concepts, <br /> ace tests, and write with confidence.</p>

    <Button className='bg-white mt-8 text-black'  size={'lg'} >Genreate Now</Button>
   </div>

   {/* other sections */}



  </div>
  )
}

export default HeroPage
