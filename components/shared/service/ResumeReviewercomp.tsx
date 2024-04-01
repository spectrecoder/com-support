"use client"
import React, { useState } from 'react';
import DeskNav from '../landingpage/navigations/DeskNav';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { imageDataChecking } from '@/lib/utils';

const ResumeReviewercomp = () => {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY!);

    const [file, setFile] = useState(null);

    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFile(reader.result as any);
        };
        if (file && allowedTypes.includes(file.type)) {
            reader.readAsDataURL(file);
        } else {
            alert('Por favor selecciona un archivo de imagen válido');
            event.target.value = null;
        }
    };

    const handleSubmit = async () => {
        if (!file) {
            alert('Por favor selecciona una imagen');
            return;
        }
        try {
            const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });

            const checkll = imageDataChecking;
            const result = await model.generateContent(["what is in this image?",  { inlineData: { data:checkll , mimeType: 'image/jpeg' } }]);
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
                    <input
                        className="bg-white"
                        type='file'
                        aria-label='Selecciona una imagen'
                        onChange={handleFileChange}
                    />
                    <input type="text" placeholder='enter job desc' />
                    <Button onClick={handleSubmit} className='bg-indigo-600 ml-4'>Generate</Button>
                </div>
            </div>
        </div>
    );
};

export default ResumeReviewercomp;
