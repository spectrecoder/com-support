import React from 'react'

type LinkedintextProps = {
    response: string
}

const LinkedinText = ({response} : LinkedintextProps) => {
    const bulletPoints = response.split(/\d+\./).filter(item => item.trim() !== '');

  return (
    <div>
      {
        bulletPoints.map((curr:any , index:any)=>{
           return <div key={index}>
            <p className='text-white ml-11 mt-1 font-light' > <span className='font-medium text-red-300' >{index+1}. </span> {curr.trim()}</p>
            <br />
           </div>
        })
      }
    </div>
  )
}

export default LinkedinText