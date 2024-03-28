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
        console.log("this is working");
        
        const customMessage = "suppose you are a linkedin caption genreator , you have to write a caption for"+prompt+ "please write a linkedin caption in 150 words by using"+tone+" words and try to genreate atleast 5 captions and try to add hashtag based on the keyword like :" +keyword + " and please try to add some emoji in caption so that it look nice";
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