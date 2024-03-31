import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


export async function POST(req:Request , res:Response) {
  const data = await req.formData();
  console.log(data);
    return new NextResponse("this is working fine")
}