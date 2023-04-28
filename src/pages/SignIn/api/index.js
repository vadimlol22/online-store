import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainApi } from "../../../config/mainApi";
import LocalStorageService from "../../../services/localStorageService";

const signInRequest = (body) => mainApi.post("/auth/signIn", body);

export const signInThunk = createAsyncThunk(
  "/auth/signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await signInRequest(payload);

      const { accessToken, ...profileData } = data;

      LocalStorageService.saveToken(accessToken);

      return profileData;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
