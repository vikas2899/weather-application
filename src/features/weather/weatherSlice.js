import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const fetchSearchedData = createAsyncThunk(
  "weather/data",
  async (coordinates = "28.57,77.1") => {
    const response = await axios.get("current.json", {
      params: { q: coordinates },
    });
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSearchedData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchedData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSearchedData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default weatherSlice.reducer;
