// utils/geminiProVision.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiProVision = async (imageURL: string, prompt: string) => {
  const genai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genai.getGenerativeModel({ model: "gemini-pro-vision" });

  const contents : any = [
    {
      role: "user",
      parts: [
        { text: prompt },
        { url: imageURL },
      ],
    },
  ];

  try {
    const result = await model.generateContent({ contents });
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default geminiProVision;
