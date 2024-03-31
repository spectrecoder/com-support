import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  console.log("Working good");
  const imageUrl =
    "https://images.pexels.com/photos/518485/pexels-photo-518485.jpeg?cs=srgb&dl=pexels-eberhard-grossgasteiger-518485.jpg&fm=jpg";
  const prompt = "What is happening in this image?";

  const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genai.getGenerativeModel({ model: "gemini-pro-vision" });

  try {
    
    const contents : any = [{
      role: "user",
      parts: [
        { text: prompt },
        { url: imageUrl }, // Use "url" for remote image URL
      ],
    }];

    const result = await model.generateContent({ contents });
    const response = await result.response;
    console.log(response.text());
  } catch (error) {
    console.error('Error:', error);
  }

  return new NextResponse("working fine");
}
