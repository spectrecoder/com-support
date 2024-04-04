import React from 'react'
import Markdown from 'markdown-it'
import DOMPurify from 'dompurify';

type ResponsetextProps = {
    data:string
}

const md = Markdown();


const ResponseText = ({data} : ResponsetextProps) => {  
  // rendering the content using mardwon  
        const htmlContent = md.render(data);
        const sanitized = DOMPurify.sanitize(htmlContent)

  return (
    <div id='response' dangerouslySetInnerHTML={{__html:htmlContent}} >
      
    </div>
  )
}

export default ResponseText
