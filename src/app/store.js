import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/Search/searchSlice";
import weatherReducer from "../features/weather/weatherSlice";
import astronomyReducer from "../features/astronomy/astronomySlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    weather: weatherReducer,
    astronomy: astronomyReducer,
  },
});

export default store;
