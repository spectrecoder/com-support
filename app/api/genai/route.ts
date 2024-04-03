import { GoogleGenerativeAI } from "@google/generative-ai";
import { StreamingTextResponse , GoogleGenerativeAIStream } from "ai";
import { NextResponse } from "next/server";


export async function POST(req:Request , res:Response) {
   try {
    const reqBody = await req.json();
    const prompt = reqBody.data.prompt;
    const keyword = reqBody.data.keyword;
    const tone = reqBody.data.tone;

    console.log(prompt , tone , keyword);
    
    

    // GEMINI API CONFIGURATON
    const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genai.getGenerativeModel({
        model:'gemini-pro',
    });

    const LinkedinPrompt = "suppose you are a linkedin caption genreator , you have to write a caption for"+prompt+ "please write a linkedin caption consist more than 200 words by using"+tone+" words and try to genreate atleast 5 captions and try to add hashtag based on the keyword like :" +keyword + " and please try to add some emoji in caption so that it look nice";
    
    const StreamRes = await model.generateContentStream(LinkedinPrompt);
    return new StreamingTextResponse(GoogleGenerativeAIStream(StreamRes));
   } catch (error) {
    console.log(error);
    return new NextResponse(error as any);
   }


    // return new StreamingTextResponse();
}