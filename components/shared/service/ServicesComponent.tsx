import React from 'react'

const ServicesComponent = () => {
  return (
    <div className=' min-h-screen border-t mx-20 border-zinc-800 ' >
      <h1 className='text-red-300 text-2xl mt-4' >
        Select any of the services
      </h1>
      <p className='text-zinc-400 font-light mt-2' >You can choose any services which is mentined below</p>

      {/* serices card */}

      <div className='flex justify-start items-start mt-8 ' >
        <div className='h-[400px] w-[350px] cursor-pointer  bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl' >
            <div className='h-2/3 w-full ' >
            </div>

            <div className='px-4 py-2' >
                <h1 className='text-red-300 text-lg' >Linkedin Caption Genreator</h1>
                <p className='text-[12px] font-normal mt-2 text-zinc-500' >Genreate your linkedin post caption with the help.ai and save your valuable time</p>
            </div>

        </div>

      </div>
    </div>
  )
}

export default ServicesComponent
