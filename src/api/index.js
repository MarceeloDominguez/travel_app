import axios from "axios";

export const restaurantsApi = axios.create({
  baseURL: "https://travel-advisor.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "36f0546488msh548e200fa864223p1cb61ejsn930ee27497d7",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
});
