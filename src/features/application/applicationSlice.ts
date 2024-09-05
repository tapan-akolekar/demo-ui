import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserData {
  id: number;
  appName: string;
  clientOrOktaId: number;
  oktaDomain: string;
  signOnMode: string;
  status: string;
  appUrl: string;
}

interface UserState {
  data: UserData[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const access_token = localStorage.getItem("id_token");
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    const response = await axios.get(
      "http://localhost:8080/app/appList",
      config
    );
    return response.data;
  }
);

const applicationSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default applicationSlice.reducer;
