import formidable from "formidable";
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { promisify } from "util";


type FormData = {
    fields: formidable.Fields;
    files: formidable.Files;
  };

export async function POST(req:NextApiRequest, res : NextApiResponse) {
    // const data = await req.formData();
    const form = new formidable.IncomingForm(); 
    

    // Parse the incoming form data
    const formData = await new Promise<FormData>((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) {
            reject(err);
          } else {
            resolve({ fields, files });
          }
        });
      });

      const imageFile = formData.files?.resume as unknown as formidable.File;
      
      if(!imageFile){
        return res.status(400).json({error:"No image selected"});
      }

      const imageData = fs.readFileSync(imageFile.filepath);
      
      
    //   image data

    console.log("Image data is" , imageData);
      return res.status(200).json({mesage:"Worked properly"});

}