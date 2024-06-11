import md5 from "md5";
import { API_PUBLIC_KEY } from "@/utils/constants";

const timestamp = "1";
const apikey = import.meta.env.VITE_API_PUBLIC_KEY || API_PUBLIC_KEY;
const secret = import.meta.env.VITE_API_PRIVATE_KEY;

export const generateHash = () => {
  if (!secret) {
    throw new Error("API private key not defined");
  }

  return md5(timestamp + secret + apikey);
};

export const generateQueryString = () => {
  const hash = generateHash();
  return `?ts=${timestamp}&hash=${hash}&apikey=${apikey}`;
};
