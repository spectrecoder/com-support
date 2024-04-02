"use server"

import { ResumeReviwerProps } from "@/types";
import { GoogleGenerativeAI } from "@google/generative-ai";


// SERVER ACTION FOR RESUME REVIEWER

export const ResumeReviewerProVision =  async ({imageData , prompt}:ResumeReviwerProps)=>{
    
    const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genai.getGenerativeModel({model:'gemini-pro-vision'});
    const resumeReviewPrompt = "Is this any resume? , if this is an resume please review and try to give some feedback based on the job details:"+prompt;
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