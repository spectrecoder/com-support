import { Sparkle, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServicesComponent = () => {

  const serv = [
    {
      name:"Linkedin caption genreator",
      desc:"Genreate your linkedin caption whenever you want with the help of help.ai and save your valuable time",
      link:"/services/linkedin"
    },
    {
      name:"Roadmap Genreator",
      desc:"Genreate your roadmap for any technology whenever you want with the help of help.ai and save your valuable time",
      link:"/services/roadmap"
    },
    {
      name:"Resume Reviewer",
      desc:"Genreate your roadmap for any technology whenever you want with the help of help.ai and save your valuable time",
      link:"/services/resume"
    },
    {
      name:"Email Assistant",
      desc:"Genreate your roadmap for any technology whenever you want with the help of help.ai and save your valuable time",
      link:"/services/email"
    },
  ]
  return (
    <div className=' min-h-screen border-t md:mx-20 mx-4 border-zinc-800 ' >
      <h1 className='bg-gradient-to-r  from-blue-300 via-red-500 to-red-700 text-transparent bg-clip-text text-2xl mt-4 ' >
        Select any of the services
      </h1>
      <p className='text-zinc-400 font-light text-sm mt-2' >You can choose any services which is mentined below</p>

      {/* serices card */}

      <div className='flex gap-4 flex-wrap' >
        {
          serv.map((curr:any , index:Number)=>{
            return <div key='2121' className='flex justify-start items-start mt-8 ' >
            <Link href={curr.link} >
            <div className='h-[350px] md:w-[400px] w-[380px] cursor-pointer  bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl' >
                <div className='h-2/3 w-full pt-6' >
                  <div className='h-12 w-12 rounded-full bg-opacity-35 bg-zinc-700 ml-6 flex justify-center items-center border-[1px] border-zinc-700' >
                    <Sparkles className='text-white' strokeWidth={1.5} />

                  </div>
                </div>
    
                <div className='px-4 ' >
                    <h1 className='text-indigo-300 text-lg' >{curr.name}</h1>
                    <p className='text-[12px] font-normal mt-2 text-zinc-500' >{curr.desc}</p>
                </div>
    
            </div></Link>
    
          </div>
          })
        }
      </div>
    </div>
  )
}

export default ServicesComponent
