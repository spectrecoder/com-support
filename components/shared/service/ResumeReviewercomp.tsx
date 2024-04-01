"use client"
import React, { useState } from 'react';
import DeskNav from '../landingpage/navigations/DeskNav';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ResumeReviewerProVision } from '@/lib/actions/pro-vision';

const ResumeReviewercomp = () => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY!);
    const [ImageforSubmission, setImageforSubmission] = useState<any>(null);

    const [file, setFile] = useState(null);


    const imageChangehandler = (event:any)=>{
        const file = event.target.files && event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                const base64ImageString = reader.result as string;
               const splittedImage =  base64ImageString.split(",")[1];
                setImageforSubmission(splittedImage);
            };
            reader.readAsDataURL(file);
        }else{
            console.log("Please select image");
            
        }
        setImageforSubmission(file);
            console.log("this is working" , file);
            
    }

    const handleVisionSubmit =  async()=>{
        if(!ImageforSubmission){
            console.log("Please upload the image of your resume");
        }

       const data =  ResumeReviewerProVision({imageData:ImageforSubmission , prompt:"what is in this image"});
    }

    

    const handleSubmit = async () => {
        if (!ImageforSubmission) {
            alert('Please select an image');
            return;
        }
        try {
            const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
           

            
            
            const result = await model.generateContent(["what is in this image?",  { inlineData: { data:ImageforSubmission , mimeType: 'image/jpeg' } }]);
            const response = await result.response;
            const text = await response.text();
            console.log(text);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='min-h-screen w-full bg-black flex flex-col justify-between items-center'>
            <div className='w-full'>
                <DeskNav />
            </div>
            <div className='pb-8'>
                <h1 className='text-indigo-400 text-2xl text-center'>Resume Reviewer</h1>
                <p className='text-white font-light text-center mt-1'>Upload your resume and provide your job description</p>
                <div>
                    {/*  */}
                    <input type="file"  onChange={imageChangehandler} />
                    <input type="text" placeholder='enter job desc' />
                    <Button onClick={handleVisionSubmit} className='bg-indigo-600 ml-4'>Generate</Button>
                </div>
            </div>
        </div>
    );
};

export default ResumeReviewercomp;
