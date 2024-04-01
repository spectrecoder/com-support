"use server"

import { ResumeReviwerProps } from "@/types";
import { GoogleGenerativeAI } from "@google/generative-ai";


// SERVER ACTION FOR RESUME REVIEWER

export const ResumeReviewerProVision =  async ({imageData , prompt}:ResumeReviwerProps)=>{
    
    const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genai.getGenerativeModel({model:'gemini-pro-vision'});
    try {
        const result = await model.generateContent(["what is in this image?",  { inlineData: { data:imageData , mimeType: 'image/jpeg' } }]);
            const response = await result.response;
            const text = await response.text();
            console.log(text);
        
        
        
    } catch (error) {
        console.log(error);
        
    }
}