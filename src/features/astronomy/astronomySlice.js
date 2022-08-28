import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const fetchAstronomyData = createAsyncThunk(
  "astronomy/data",
  async (coordinates = "28.57,77.1") => {
    const response = await axios.get("astronomy.json", {
      params: { q: coordinates },
    });
    return response.data;
  }
);

const astronomySlice = createSlice({
  name: "astronomy",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAstronomyData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAstronomyData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAstronomyData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default astronomySlice.reducer;
