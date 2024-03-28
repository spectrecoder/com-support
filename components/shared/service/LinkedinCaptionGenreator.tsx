import React from 'react'
import DeskNav from '../landingpage/navigations/DeskNav'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
  

const LinkedinCaptionGenreator = () => {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col justify-between items-center">
      <div className="w-full">
        <DeskNav />
      </div>

      <div className="w-full mb-10 flex flex-col items-center justify-center">
        <input
          className="h-14 w-[800px] bg-zinc-800 outline-none  rounded-md px-4 border-[1px] border-zinc-700 placeholder:font-normal placeholder:text-zinc-500 placeholder:text-sm text-white"
          placeholder="Please Describe about your post in few words"
        />

        {/* select componenet */}
            <div className='w-[800px] flex justify-between items-center mt-4' >
            <Select>
          <SelectTrigger className="w-[380px] bg-zinc-800 border-zinc-700 text-zinc-400">
            <SelectValue placeholder="Select Tone" />
          </SelectTrigger>
          <SelectContent className='bg-zinc-900 text-white ' >
            <SelectItem  value="light">Proffessinol</SelectItem>
            <SelectItem  value="dark">Confideint</SelectItem>
            <SelectItem  value="system">Casual</SelectItem>
          </SelectContent>
        </Select>

        <input className='h-10 w-[400px] rounded-md bg-zinc-800 border-[1px] border-zinc-700 placeholder:text-zinc-500 placeholder:text-sm text-white px-2' placeholder='Suggest Some Keywords...' />

            </div>
        <Button className='mt-4 w-[800px] bg-red-400 text-black' >
            <Sparkles size={17} strokeWidth={1.5}/>
            Genreate With Help.ai
        </Button>
        
      </div>
    </div>
  );
}

export default LinkedinCaptionGenreator
