import React from 'react'

type LinkedintextProps = {
    response: string
}

const LinkedinText = ({response} : LinkedintextProps) => {
    const bulletPoints = response.split(/\d+\./).filter(item => item.trim() !== '');

  return (
    <div>
      {
        bulletPoints.map((curr:any)=>{
           return <div>
            <p className='text-white ml-11 mt-1 font-light' >{curr.trim()}</p>
            <br />
           </div>
        })
      }
    </div>
  )
}

export default LinkedinText
