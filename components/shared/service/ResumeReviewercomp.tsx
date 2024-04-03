"use client";
import React, { useRef, useState } from "react";
import DeskNav from "../landingpage/navigations/DeskNav";
import Image from "next/image";
import { ResumeReviewerProVision } from "@/lib/actions/pro-vision";
import { ImageIcon, Send, X } from "lucide-react";
import ResponseText from "./ResponseText";

const ResumeReviewercomp = () => {
  
  const ImageInputHanlder = useRef<any>(null);

  const imageOpener = () => {
    ImageInputHanlder.current.click();
  };


  const [ImageforSubmission, setImageforSubmission] = useState<any>(null);

  const [ImageForShow, setImageForShow] = useState<any>(null);
  const [Response, setResponse] = useState<any>(null);

  const [ShowLogo, setShowLogo] = useState<boolean>(true);
  const [ShowLoading, setShowLoading] = useState<boolean>(false);

  const [Prompt, setPrompt] = useState<string>("");

  const imageChangehandler = (event: any) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageForShow(reader.result);
        const base64ImageString = reader.result as string;
        const splittedImage = base64ImageString.split(",")[1];
        setImageforSubmission(splittedImage);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("Please select image");
    }
    setImageforSubmission(file);
    console.log("this is working", file);
  };

  const handleVisionSubmit = async () => {
    setShowLogo(false);
    setShowLoading(true);
    if (!ImageforSubmission) {
      console.log("Please upload the image of your resume");
    }

    const data = await ResumeReviewerProVision({
      imageData: ImageforSubmission,
      prompt: Prompt,
    });
    if (data) {
      console.log(data);
      
        setShowLoading(false);
      setResponse(data);
    }
  };

  return (
  <div className="h-screen w-full bg-black" >
      <div className="h-full  w-full bg-black flex flex-col justify-between items-center">
      <div className="w-full">
        <DeskNav />
      </div>

      {/* Response text section */}

      <div className="h-[700px] overflow-x-scroll no-scrollbar w-full md:px-96 px-4">

        {
            ShowLogo && !ShowLoading && (
                <div className="h-full w-full flex justify-center items-center" >
                    <Image className="h-16 w-16" src={`/tab.svg`} height={900}width={900} alt="logo" />
                </div>
            )
        }
        {
            ShowLoading && (
                <div className="h-full w-full flex justify-center items-center" >
                    <div className="h-6 w-6  bg-white rounded-full animate-ping" ></div>
                </div>
            )
        }
       {
        Response && (
            <div className="flex gap-2 items-center mt-8 ml-4">
            <Image
              className="h-6 w-6"
              src={`/tab.svg`}
              height={900}
              width={900}
              alt="tab"
            />
            <p className="text-white">help.ai</p>
          </div>
        )
       }
        <div className="whitespace-pre-wrap mt-2 ml-6 font-sans">
          {Response && (
            <p className="text-white whitespace-pre-wrap tracking-wide leading-relaxed">
              {" "}
              <ResponseText data={Response} />{" "}
            </p>
          )}
        </div>
      </div>

      <div className="pb-8">
        <div className="flex w-full">
          <div className="h-16 md:w-[800px] w-[400px] bg-zinc-900 rounded-full bg-opacity-70 flex items-center justify-between px-8 mb-16 md:mb-0">
            <input
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
              type="text"
              placeholder="Enter Job Description..."
              className="bg-transparent placeholder:text-zinc-300 font-sans outline-none text-white w-[600px]"
            />

            <input
              type="file"
              hidden
              ref={ImageInputHanlder}
              onChange={imageChangehandler}
            />

            <div className="flex items-center gap-4">
              {!ImageForShow && (
                <ImageIcon onClick={imageOpener} className="text-zinc-300" />
              )}
              {ImageForShow && (
                <div>
                  <div className="relative">
                    <Image
                      className="min-h-10 h-10 w-10 min-w-10 object-cover rounded-lg"
                      src={ImageForShow}
                      height={900}
                      width={900}
                      alt="thisisimage"
                    />
                    <div className="h-4 w-4 rounded-full bg-zinc-900 absolute top-[-6px] right-[-5px] flex justify-center items-center ">
                      <X
                        onClick={() => {
                          setImageForShow(null);
                          setImageforSubmission(null);
                        }}
                        className="text-white"
                        strokeWidth={1}
                        size={12}
                      />
                    </div>
                  </div>
                </div>
              )}
              {Prompt !== "" && ImageforSubmission && (
                <Send onClick={handleVisionSubmit} className="text-blue-300" />
              )}
            </div>
          </div>
          {/*  */}

          {/* 
                    <input type="text" placeholder='enter job desc' /> */}
          {/* <Button onClick={handleVisionSubmit} className='bg-indigo-600 ml-4'>Generate</Button> */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ResumeReviewercomp;
