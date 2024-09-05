import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UserInfo {
  id: number;
  name: string;
  sub: number;
  locale: string;
  email: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  zoneinfo: string;
  email_verified: string;
  lastName: string;
  firstName: string;
  oktaSelfServiceToolPermissionGroups: string;
  userType: string;
  userID: number;
  sstGSECGroups: string;
}

interface UserState {
  data: UserInfo | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchUserInfo = createAsyncThunk(
  "userinfo/fetchUserInfo",
  async () => {
    const access_token = localStorage.getItem("id_token");
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    const response = await axios.get(
      "http://localhost:8080/auth/userInfo",
      config
    );
    return response.data;
  }
);

const myInfoSlice = createSlice({
  name: "userinfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default myInfoSlice.reducer;
