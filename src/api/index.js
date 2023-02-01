import axios from "axios";
import { APIKEY } from "@env";

export const restaurantsApi = axios.create({
  baseURL: "https://travel-advisor.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": APIKEY,
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
});
