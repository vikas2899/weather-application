import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: "https://api.weatherapi.com/v1/",
  headers: {
    key: API_KEY,
  },
});
