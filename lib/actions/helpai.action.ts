"use server"

import { GenreateLinkedinCaptionParams } from "@/types";
import { error } from "console";
import OpenAI from "openai";




const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
    dangerouslyAllowBrowser: true // This is the default and can be omitted
  });


  export const genreateLinkedincaption = async ({keyword , prompt , tone}: GenreateLinkedinCaptionParams)=>{
    try {
        const customMessage = "suppose you are a linkedi caption genreator"+prompt+tone+keyword;
        const captionRes = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages:[
                {
                    role:'system',
                    content:customMessage,
                }
            ]
        });

        if(!captionRes){
            throw error("Some error occured while requesting data to the openai");
        }

        return JSON.parse(JSON.stringify(captionRes.choices[0].message.content));

    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
  }