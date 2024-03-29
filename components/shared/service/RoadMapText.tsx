import Link from 'next/link'
import React from 'react'


type RoadMapTextprops = {
    title:string,
    desc:string,
    resourse:string,

}
const RoadMapText = ({desc , resourse , title} : RoadMapTextprops) => {
  return (
    <div>
      <div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <p>
      Resource: {' '}
      <Link href={resourse}>
        <a>{resourse}</a>
      </Link>
    </p>
  </div>
    </div>
  )
}

export default RoadMapText
