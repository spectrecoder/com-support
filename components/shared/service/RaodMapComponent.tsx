"use client"
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import React, { useState } from 'react'
import LinkedinText from './LinkedinText';
import Image from 'next/image';
import DeskNav from '../landingpage/navigations/DeskNav';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { genreateLinkedincaption, GenreateRoadMapsWithhelpai } from '@/lib/actions/helpai.action';
import ResponseText from './ResponseText';
  

const RaodMapComponent = () => {
    const [Prompt, setPrompt] = useState<string>("");
  const [Tone, setTone] = useState<string>("");
  const [Keywords, setKeywords] = useState<string>("");
  const [Loading, setLoading] = useState<boolean>(false);
  const [showLogo, setshowLogo] = useState<boolean>(true);
  const [Response, setResponse] = useState<any>(null);


  
  // calling the action

  const handleSubmit = async () => {
    try {
      setshowLogo(false);
      setLoading(true);
      const res = await GenreateRoadMapsWithhelpai({
        topic: Prompt,
        days: Tone,
      });
      res.split("\n\n");
      setResponse(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw Error("Some error occured");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col justify-between items-center">
      <div className="w-full">
        <DeskNav/>



      {/* login for showing logo when response and showlogo both are false whenever wny of them turned true then a loading state will appear  */}
        {
          Response == null && showLogo && (
            <div className="h-[500px] md:h-[400px] w-full  flex justify-center items-center" >

              <Image className="h-16 w-16 rounded-full" src={`/tab.svg`} height={900} width={900} alt="logoimage" />

            </div>
          )
        }
        {
          Loading  && (
            <div className="h-[500px] md:h-[400px] w-full  flex justify-center items-center" >

              <div className="h-4 w-4 bg-white rounded-full animate-ping" >

              </div>

            </div>
          )
        }

        {Response && (
          <div className="md:h-[400px] mt-8 md:mt-2 h-[500px] mx-8 md:mx-96 overflow-x-scroll no-scrollbar">
            {/* aiheading */}
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-zinc-800 rounded-full flex justify-center items-center">
                <Image
                  className="h-6 w-auto "
                  src={`/tab.svg`}
                  height={900}
                  width={900}
                  alt="logoimage"
                />
              </div>
              <p className="text-xl text-white">Help.ai</p>
            </div>
           

            {/* response div */}

            <div className='text-white ml-11 mt-4 text-sm whitespace-pre-wrap' >
              <ResponseText  data={Response} />
           
            </div>
          </div>
        )}
      </div>

      <div className="w-full px-4 md:px-0 md:mb-10 mb-20 flex flex-col items-center justify-center">
        <input
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          className="h-14 md:w-[800px] w-full bg-zinc-800 bg-opacity-30 outline-none  rounded-md px-4 border-[1px] border-zinc-900 placeholder:font-light placeholder:text-zinc-400 placeholder:text-sm  text-white"
          placeholder="Technology you want to learn... "
        />

        {/* select componenet */}
        <div className="md:w-[800px] w-full gap-4 flex justify-between items-center mt-4">
          <Select
            onValueChange={(value) => {
              setTone(value);
            }}
          >
            <SelectTrigger className="md:w-[380px] bg-opacity-30 w-full bg-zinc-800 border-zinc-900 text-zinc-400">
              <SelectValue placeholder="Select Duration" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-950 text-white border-zinc-800 hover:bg-zinc-900">
              <SelectItem value="15">15-Days</SelectItem>
              <SelectItem value="10">30-Days</SelectItem>
              <SelectItem value="60">2-Months</SelectItem>
              <SelectItem value="90">3-Months</SelectItem>
            </SelectContent>
          </Select>

          <input
            onChange={(e) => {
              setKeywords(e.target.value);
            }}
            className="h-10 md:w-[400px] w-full bg-opacity-30 rounded-md bg-zinc-800 border-[1px] border-zinc-900 placeholder:font-light placeholder:text-zinc-400 placeholder:text-sm  text-white px-2"
            placeholder="Additionols..."
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="mt-4 md:w-[800px] w-full bg-white text-black rounded-full"
        >
          <Sparkles size={17} strokeWidth={1.5} />
          Genreate With Help.ai
        </Button>
      </div>
    </div>
  );
}

export default RaodMapComponent
