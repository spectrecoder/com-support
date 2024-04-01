import React from 'react'
import Markdown from 'markdown-it'


type ResponsetextProps = {
    data:string
}

const md = Markdown();

const ResponseText = ({data} : ResponsetextProps) => {
    console.log("This is data" , data);
    
        const htmlContent = md.render(data);
  return (
    <div dangerouslySetInnerHTML={{__html:htmlContent}} >
      
    </div>
  )
}

export default ResponseText
