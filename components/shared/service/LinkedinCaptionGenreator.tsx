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
import { Sparkles } from "lucide-react";
import { genreateLinkedincaption } from "@/lib/actions/helpai.action";
import Image from "next/image";
import LinkedinText from "./LinkedinText";

const LinkedinCaptionGenreator = () => {
  const [Prompt, setPrompt] = useState<string>("");
  const [Tone, setTone] = useState<string>("");
  const [Keywords, setKeywords] = useState<string>("");

  const [Response, setResponse] = useState<any>(null);

  // calling the action

  const handleSubmit = async () => {
    try {
      console.log("this is called");

      const res = await genreateLinkedincaption({
        keyword: Keywords,
        prompt: Prompt,
        tone: Tone,
      });
      console.log(res);
      
      res.split("\n\n");
      setResponse(res);
      console.log(res);
    } catch (error) {
      throw Error("Some error occured");
    }
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col justify-between items-center">
      <div className="w-full">
        <DeskNav />

        {Response && (
          <div className="h-[400px] mx-96 overflow-x-scroll no-scrollbar">
            {/* aiheading */}
            <div className="flex items-center gap-4">
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

            <div>
              <LinkedinText response={Response} />
           
            </div>
          </div>
        )}
      </div>

      <div className="w-full mb-10 flex flex-col items-center justify-center">
        <input
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          className="h-14 w-[800px] bg-zinc-800 outline-none  rounded-md px-4 border-[1px] border-zinc-700 placeholder:font-normal placeholder:text-zinc-500 placeholder:text-sm text-white"
          placeholder="Please Describe about your post in few words"
        />

        {/* select componenet */}
        <div className="w-[800px] flex justify-between items-center mt-4">
          <Select
            onValueChange={(value) => {
              setTone(value);
            }}
          >
            <SelectTrigger className="w-[380px] bg-zinc-800 border-zinc-700 text-zinc-400">
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
            className="h-10 w-[400px] rounded-md bg-zinc-800 border-[1px] border-zinc-700 placeholder:text-zinc-500 placeholder:text-sm text-white px-2"
            placeholder="Suggest Some Keywords..."
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="mt-4 w-[800px] bg-red-400 text-black"
        >
          <Sparkles size={17} strokeWidth={1.5} />
          Genreate With Help.ai
        </Button>
      </div>
    </div>
  );
};

export default LinkedinCaptionGenreator;
