"use server"

import { ResumeReviwerProps } from "@/types";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const ResumeReviewerProVision =  async ({imageData , prompt , type }:ResumeReviwerProps)=>{
    
    const genai = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!);
    const model = genai.getGenerativeModel({model:'gemini-pro-vision'});
    const resumeReviewPrompt = "Is this any resume? , if this is an resume please review and try to give some feedback based on the job details:"+prompt;

    console.log('ererererere', genai)
    if(type == "EMAIL"){
        const emailPrompt = prompt+", please alalyze my resume and try to write good cover letter so that i can apply"

        try {
            const result = await model.generateContent([emailPrompt,  { inlineData: { data:imageData , mimeType: 'image/jpeg' } }]);
            const response = await result.response;
            const text = await response.text();
            console.log(text);
            return text;
        } catch (error) {
            console.log(error);
            
        }
    }
    try {
        const result = await model.generateContent([resumeReviewPrompt,  { inlineData: { data:imageData , mimeType: 'image/jpeg' } }]);
            const response = await result.response;
            const text = await response.text();
            console.log(text);
        
            return text;
        
        
    } catch (error) {
        console.log(error);
        
    }
}