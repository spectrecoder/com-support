"use client";
import React, { useState } from "react";
import DeskNav from "../landingpage/navigations/DeskNav";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Bot, Sparkles, User2 } from "lucide-react";
import Image from "next/image";
import { useChat } from "ai/react";
import ResponseText from "./ResponseText";

const LinkedinCaptionGenreator = () => {
  const [Prompt, setPrompt] = useState<string>("");
  const [Tone, setTone] = useState<string>("");
  const [Keywords, setKeywords] = useState<string>("");
  const [Loading, setLoading] = useState<boolean>(false);
  const [showLogo, setshowLogo] = useState<boolean>(true);
  const [Response, setResponse] = useState<any>(null);


  const { messages, input, handleInputChange, handleSubmit , isLoading } = useChat({
    api:'/api/genai'
  });


  return (
    <div className="min-h-screen w-full bg-black flex flex-col justify-between items-center">
      <div className="w-full">
        <DeskNav />



      {/* login for showing logo when response and showlogo both are false whenever wny of them turned true then a loading state will appear  */}
        {
          Response == null && showLogo && (
          <div className="h-[500px] md:h-[400px] w-full  flex justify-center items-center" >

              <Image className="h-16 w-16 rounded-full" src={`/tab.svg`} height={900} width={900} alt="logoimage" />

            </div>
          )
        }


        {
          messages.length <= 0 && !showLogo  && (
            <div className="h-[500px] md:h-[400px] w-full  flex justify-center items-center" >

              <div className="h-4 w-4 bg-white rounded-full animate-ping" >

              </div>

            </div>
          )
        }

        



        {messages.length > 0   && (
          <div className="md:h-[400px] mt-8 md:mt-2 h-[500px] mx-8 md:mx-96 overflow-x-scroll no-scrollbar">
            {/* aiheading */}
            <div className="flex items-center gap-3">
          
            </div>
           

            {/* response div */}

            <div className="flex flex-col-reverse whitespace-pre-wrap" >
            {messages.map((m, index) => {
          return (
            <div
            className={`p-4 shadow-md rounded-md md:ml-10 relative  ${
              m.role === "user" ? "bg-stone-300 hidden" : ""
            }`}
          >
            <div className="flex items-center gap-2" >
              <div className="h-10 w-10 bg-zinc-800 rounded-full flex justify-center items-center" >
                <Image className="h-8 w-8 object-contain" src={`/tab.svg`} height={1000} width={1000} alt="logo" />
              </div>
              <p className="text-white" >help.ai</p>
            </div>

            <div className="text-white mt-6 ml-6 font-sans" >
            <ResponseText data={m.content}  />
            </div>
           {/* <p className="text-white font-light leading-relaxed tracking-wide mt-2 ml-11" >{m.content}</p> */}
            {m.role === "user" ? (
              <User2 className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg" />
            ) : (
              <div className="h-8 w-8  rounded-full flex justify-center items-center">
             
            </div>
            )}
          </div>
          );
        })}
           
            </div>
          </div>
        )}
      </div>
              <form onSubmit={(event)=>{
                setshowLogo(false);
                event.preventDefault();
                handleSubmit(event , {
                   data:{
                    prompt:input,
                    keyword:Keywords,
                    tone:Tone
                   }
                })
              }} >
      <div className="w-full px-4 md:px-0 md:mb-10 mb-20 flex flex-col items-center justify-center">
        <input value={input} 
          onChange={handleInputChange}
          className="h-14 md:w-[800px] w-full bg-zinc-800 bg-opacity-30 outline-none  rounded-md px-4 border-[1px] border-zinc-900 placeholder:font-light placeholder:text-zinc-400 placeholder:text-sm  text-white"
          placeholder="Please Describe your post... "
        />

        {/* select componenet */}
        <div className="md:w-[800px] w-full gap-4 flex justify-between items-center mt-4">
          <Select
            onValueChange={(value) => {
              setTone(value);
            }}
          >
            <SelectTrigger className="md:w-[380px] bg-opacity-30 w-full bg-zinc-800 border-zinc-900 text-zinc-400">
              <SelectValue placeholder="Select Tone" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 text-white ">
              <SelectItem value="confideint">Proffessinol</SelectItem>
              <SelectItem value="professinol">Confideint</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
            </SelectContent>
          </Select>

          <input
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
            className="h-10 md:w-[400px] w-full bg-opacity-30 rounded-md bg-zinc-800 border-[1px] border-zinc-900 placeholder:font-light placeholder:text-zinc-400 placeholder:text-sm  text-white px-2"
            placeholder="Keywords..."
          />
        </div>
        <Button
          type="submit"
          className="mt-4 md:w-[800px] w-full bg-white text-black rounded-full"
        >
          <Sparkles size={17} strokeWidth={1.5} />
          Genreate With Help.ai
        </Button>
      </div>
      </form>
    </div>
  );
};



export default LinkedinCaptionGenreator;
