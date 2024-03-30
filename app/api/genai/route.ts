import { GoogleGenerativeAI } from "@google/generative-ai";
import { StreamingTextResponse , GoogleGenerativeAIStream } from "ai";


export async function POST(req:Request , res:Response) {
   try {
    const reqBody = await req.json();
    const prompt = reqBody.data.prompt;
    

    // GEMINI API CONFIGURATON
    const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genai.getGenerativeModel({
        model:'gemini-pro',
    });
    const StreamRes = await model.generateContentStream(prompt);
    console.log(StreamRes);
    
    return new StreamingTextResponse(GoogleGenerativeAIStream(StreamRes));
   } catch (error) {
    console.log(error);
    
   }


    // return new StreamingTextResponse();
}