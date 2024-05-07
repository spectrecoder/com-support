import { FileScan, Linkedin, MailCheck, MousePointerClickIcon, Sparkle, Sparkles, Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServicesComponent = () => {

  const serv = [
    {
      name:"Linkedin caption genreator",
      desc:"Genreate your linkedin caption whenever you want with the help of Commune AI Support and save your valuable time",
      link:"/services/linkedin",
      type:"Linkedin"
    },
    {
      name:"Roadmap Genreator",
      desc:"Genreate your roadmap for any technology whenever you want with the help of Commune AI Support and save your valuable time",
      link:"/services/roadmap",
      type:"Roadmap"
    },
    {
      name:"Resume Reviewer",
      desc:"Don't apply to any job without reviewing your resume , now review your resume based on the jaob desc with the Commune AI Support",
      link:"/services/resume",
      type:"Resume"
    },
    {
      name:"Email Assistant",
      desc:"Wondering about how to write a good email? don't worry Commune AI Support will help you to write good and prominet email.",
      link:"/services/email",
      type:"Email"
    },
  ]
  return (
    <div className="min-h-screen border-t md:mx-20 mx-4 border-zinc-800 bg-[url('/bg.svg')]" >
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
                    {
                      curr.type == "Resume" && (
                        <FileScan className='text-orange-300' strokeWidth={1.5} />
                      )
                    }
                    {
                      curr.type == "Linkedin" && (
                        <Linkedin className='text-indigo-300' strokeWidth={1.5} />
                      )
                    }
                    {
                      curr.type == "Roadmap" && (
                        <Sun className='text-yellow-300' strokeWidth={1.5} />
                      )
                    }
                    {
                      curr.type == "Email" && (
                        <MailCheck className='text-pink-300' strokeWidth={1.5} />
                      )
                    }
                  </div>
                </div>
    
               {
                curr.type == "Resume" && (
                  <div className='px-4 ' >
                  <h1 className='text-orange-300 text-lg' >{curr.name}</h1>
                  <p className='text-[12px] font-normal mt-2 text-zinc-500' >{curr.desc}</p>
              </div>
                )
               }
               {
                curr.type == "Roadmap" && (
                  <div className='px-4 ' >
                  <h1 className='text-yellow-300 text-lg' >{curr.name}</h1>
                  <p className='text-[12px] font-normal mt-2 text-zinc-500' >{curr.desc}</p>
              </div>
                )
               }
               {
                curr.type == "Email" && (
                  <div className='px-4 ' >
                  <h1 className='text-pink-300 text-lg' >{curr.name}</h1>
                  <p className='text-[12px] font-normal mt-2 text-zinc-500' >{curr.desc}</p>
              </div>
                )
               }
               {
                curr.type == "Linkedin" && (
                  <div className='px-4 ' >
                  <h1 className='text-blue-300 text-lg' >{curr.name}</h1>
                  <p className='text-[12px] font-normal mt-2 text-zinc-500' >{curr.desc}</p>
              </div>
                )
               }    
            </div></Link>
    
          </div>
          })
        }

<div className='h-16 w-full flex items-center justify-center md:mt-16' >
    <Link href="https://communeai.org/" target='_blank'><p className='text-zinc-700 font-light text-sm' >Made by Commune</p></Link>

   </div>
      </div>
    </div>
  )
}

export default ServicesComponent
