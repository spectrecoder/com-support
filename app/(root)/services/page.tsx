import DeskNav from '@/components/shared/landingpage/navigations/DeskNav'
import ServicesComponent from '@/components/shared/service/ServicesComponent'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen w-full bg-black' >
        <DeskNav/>
      <ServicesComponent/>
    </div>
  )
}

export default page
