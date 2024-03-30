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
      name:"Roadmap Genreator",
      desc:"Genreate your roadmap for any technology whenever you want with the help of help.ai and save your valuable time",
      link:"/services/resume"
    },
  ]
  return (
    <div className=' min-h-screen border-t md:mx-20 mx-4 border-zinc-800 ' >
      <h1 className='text-red-300 text-2xl mt-4' >
        Select any of the services
      </h1>
      <p className='text-zinc-400 font-light mt-2' >You can choose any services which is mentined below</p>

      {/* serices card */}

      <div className='flex gap-4 flex-wrap' >
        {
          serv.map((curr:any , index:Number)=>{
            return <div key='2121' className='flex justify-start items-start mt-8 ' >
            <Link href={curr.link} >
            <div className='h-[400px] w-[350px] cursor-pointer  bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl' >
                <div className='h-2/3 w-full ' >
                </div>
    
                <div className='px-4 py-2' >
                    <h1 className='text-red-300 text-lg' >{curr.name}</h1>
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
