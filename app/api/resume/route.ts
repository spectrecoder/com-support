import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import formidable from 'formidable';

const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);

export const config = {
  api: {
    bodyParser: false,
  },
};

function fileToGenerativePart(path: string, mimeType: string) {
  try {
    const data = fs.readFileSync(path);
    return {
      inlineData: {
        data: Buffer.from(data).toString('base64'),
        mimeType,
      },
    };
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
}

export  async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("working fine");
  
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      // const { prompt } = fields as { prompt: string };
      const image1 = (files.resume as unknown as formidable.File).filepath;

      const imageParts = fileToGenerativePart(image1, 'image/png')

      try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
        const result = await model.generateContent(['what is in this image?', imageParts!]);
        const response = await result.response;
        const text = await response.text();
        res.status(200).json({ text });
      } catch (error) {
        console.error('Error generating content:', error);
        res.status(500).json({ error: 'Failed to generate content' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
