import React from 'react'
import Markdown from 'react-markdown'

type LinkedintextProps = {
    response: string
    type:"ROADMAP" | "LINKEDIN" | "COVERLETTER"
}

const LinkedinText = ({response , type} : LinkedintextProps) => {
  let resText : any = [];

  if(type == "LINKEDIN"){
      resText = response.split(/\d+\./).filter(item => item.trim() !== '');
  }
   

    if(type=='ROADMAP'){
    const bulletPoints = response.split('\n\n');
    for(let i =0;i<bulletPoints.length;i++){
      const parts = bulletPoints[i].split(/ - \[.*?\]\(.*?\)/);
      const formattedData = parts.join("\n\n").replace(/\[(.*?)\]\((.*?)\)/g, "$1");
      resText.push(formattedData)
    }

    }



  return (
    <div>
      {
        resText.map((curr:any , index:any)=>{
           return <div key={index}>
              <Markdown className="text-white font-light ml-11 mt-4" >{curr.trim()}</Markdown>
              {/* Using the responsetext componet instead of using this component -- reason -- for utilizing one component for rendering the all responses */}
            <br />
            
           </div>
        })
      }
    </div>
  )
}

export default LinkedinText
