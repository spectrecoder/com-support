"use client"
import React, { useState } from 'react'
import DeskNav from '../landingpage/navigations/DeskNav'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { convertDataContentToBase64String } from 'ai'
import { resumeHelpAi } from '@/lib/actions/helpai.action'

const ResumeReviewercomp = () => {

    const [selectedFile, setselectedFile] = useState<any>(null);
    const [UploadData, setUploadData] = useState<any>(null);
    
    const handleImage = (event : any )=>{
        const fileData = event.target.files[0];
        setselectedFile(fileData);
        if(fileData){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setUploadData(reader.result as string);
            }
            reader.readAsDataURL(fileData)
        }
    }

    const handleSubmit = async()=>{

        // await resumeHelpAi(UploadData);

        const BodyPara = {
            resume:UploadData
        }

        const nextBodyData = JSON.stringify(BodyPara);
        const res = await fetch("/api/resume" , {
            method:'POST',
            body:nextBodyData
        });

        console.log(res.body);
        

        // await resumeAi({imageData:UploadData});
        // const formData = new FormData();
        // formData.append('resume' , ',sknd');
        // try {
        //     const res = await fetch("/api/resume" , {
        //         method:"POST",
        //         body:formData
        //     });
        //     if(res.ok){
        //         console.log("Data get transmitted");
                
        //     }else{
        //         console.log("Error:" , res.statusText);
                
        //     }

        // } catch (error) {
        //     console.log(error);
            
        // }
    }


  return (
    <div className='min-h-screen w-full bg-black flex flex-col justify-between items-center' >
        <div className='w-full' >
        <DeskNav/>
        </div>

        {/* showing image when it is selected */}
        {
            selectedFile && (
                <div>
                    <Image className='h-[400px] w-[400px] object-cover' src={URL.createObjectURL(selectedFile)} height={800} width={800} alt='selectedimage' />
                </div>
            )
        }




        <div className='pb-8' >
            <h1 className='text-indigo-400 text-2xl text-center' >Resume Reviewer</h1>
            <p className='text-white font-light text-center mt-1' >Upload your resume and provide your job description</p>

            <div>
                <input onChange={handleImage} type="file" />
                <input type="text" placeholder='enter job desc' />
                <Button onClick={handleSubmit} className='bg-indigo-600 ml-4' >Genreate</Button>
            </div>
        </div>
      
    </div>
  )
}

export default ResumeReviewercomp
