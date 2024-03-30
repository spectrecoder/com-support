"use server"

import { GenreateLinkedinCaptionParams, RoadmapProps } from "@/types";
import { error } from "console";
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { StreamingTextResponse , GoogleGenerativeAIStream } from "ai";



// OPEN AI CONFIGURATION
const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY,
    dangerouslyAllowBrowser: true // This is the default and can be omitted
  });







  export const genreateLinkedincaption = async ({keyword , prompt , tone}: GenreateLinkedinCaptionParams)=>{
    try {
        const customMessage = "suppose you are a linkedin caption genreator , you have to write a caption for"+prompt+ "please write a linkedin caption consist more than 200 words by using"+tone+" words and try to genreate atleast 5 captions and try to add hashtag based on the keyword like :" +keyword + " and please try to add some emoji in caption so that it look nice";
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


  export const GenreateRoadMapsWithhelpai = async ({days , topic}: RoadmapProps)=>{
    try {
        const RoadmapPrompt = "As an AI specialized in creating effective learning roadmaps, I need you to generate a comprehensive "+days+"-day roadmap tailored for learning " + topic + "The roadmap should cover essential topics divided into manageable daily tasks, ensuring progressive learning and mastery over the 30-day period. Additionally, please include tutorial links and resources to support each topic for enhanced learning";

        const roadMapRes = await openai.chat.completions.create({
            model:'gpt-3.5-turbo',
            messages:[
                {
                    role:"system",
                    content:RoadmapPrompt
                }
            ]
        });
        if(!roadMapRes){
            return JSON.parse(JSON.stringify({message:"Some error occured"}));
        }
        return JSON.parse(JSON.stringify(roadMapRes.choices[0].message.content));
        
    } catch (error) {
        console.log(error);
        throw new Error("some error found");
        
    }
  }






