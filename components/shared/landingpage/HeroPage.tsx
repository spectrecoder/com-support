import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";
import DeskNav from "./navigations/DeskNav";
import Footer from "./footer/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dot, Radio, Sparkle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const HeroPage = () => {
  return (
    <div className="min-h-screen w-full bg-[url('/bg.jpg')] bg-cover">
      <div className="bg-zinc-950 min-h-screen bg-opacity-75 bg-contain">
        <Spotlight
          className="top-0 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <DeskNav />

        <div className="min-h-24 w-full flex flex-col justify-center items-center">
          <div className="px-4 py-2 border-[1px] border-zinc-900 flex justify-center items-center cursor-pointer rounded-full gap-3 mt-16">
            <div className="h-2 w-2 relative  animate-ping bg-green-300 rounded-full flex items-center justify-center">
              <div className="absolute h-2  w-2 bg-blue-500 animate-spin"></div>
            </div>
          </div>
          <h1 className="bg-gradient-to-r mx-4 from-white via-zinc-400 to-zinc-700 text-transparent bg-clip-text md:text-6xl md:mx-[20rem] text-4xl font-bold mt-8 text-center tracking-normal leading-tight animate-pulse">
            Get satisfactory results and make significant progress as you wish.
          </h1>
          <p className="text-zinc-500 md:mt-8 text-sm md:text-base text-center mt-4 md:mx-[23rem] mx-10 ">
            You can receive the necessary assistance from Commune AI for various
            activities such as resume building and planning your roadmap.
            <span className="md:inline-block hidden">
              {" "}
              let's start commune.ai
            </span>{" "}
            Generate anything you want with Commune
          </p>

          <Link href={`/services`}>
            <div className="h-16 bg-zinc-950 border-[1px] border-zinc-800 rounded-xl mt-60 flex justify-between items-center md:px-4 px-10 gap-4">
              <p className="text-zinc-400 font-light text-sm md:block hidden">
                Captions , Cover letter , roadmap and may more
              </p>

              <Button className="md:bg-zinc-900 bg-transparent text-white  md:text-white hover:bg-zinc-900 hover:text-white">
                <Sparkles
                  className="mr-1 hover:text-white"
                  size={17}
                  strokeWidth={1.4}
                />
                Generate With Commune AI
              </Button>
            </div>
          </Link>

          <div className="">
            {/* <Image className='h-[600px] w-auto rounded-xl mt-16 hidden md:block'  src={`/data.svg`} height={1500} width={1500}alt='heroimage' /> */}
            {/* <Image className='h-[600px] w-auto rounded-2xl mt-2 px-4 md:hidden'  src={`/mobdata.svg`} height={1500} width={1500}alt='heroimage' /> */}
          </div>
        </div>

        {/* other sections */}

        <div className="h-16 w-full flex items-center justify-center md:mt-16">
          <Link href="https://communeai.org/" target="_blank">
            <p className="text-zinc-700 font-light text-sm">Made by Commune</p>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HeroPage;
