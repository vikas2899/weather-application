import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const fetchSearchListData = createAsyncThunk(
  "search/location",
  async (term = "Delhi") => {
    const response = await axios.get("search.json", { params: { q: term } });
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSearchListData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchListData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchSearchListData.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default searchSlice.reducer;
