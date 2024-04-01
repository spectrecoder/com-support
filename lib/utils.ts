import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// METHOD FOR CONVERTING IMAGE INTO BASE64


export const Base64COnversion = (TargetImage: any)=>{

}

