import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(process.env);
export default axios.create({
  baseURL: "http://api.weatherapi.com/v1/",
  headers: {
    key: API_KEY,
  },
});
