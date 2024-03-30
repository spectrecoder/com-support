import { StreamingTextResponse } from "ai";


export async function POST(req:Request , res:Response) {
   try {
    console.log("this is called");
    
    const reqBody = await req.json();
    const prompt = reqBody.data.prompt;
    console.log(prompt);
    
   } catch (error) {
    console.log(error);
    
   }


    // return new StreamingTextResponse();
}