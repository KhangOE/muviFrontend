import { createSlice } from "@reduxjs/toolkit";
import setAuthToken from "../../utils/setAuthToken";

const initialState: {
  currentUser:
    | {
        id: number;
        userName: string;
        name: string;
        email: string;
      }
    | undefined
    | null;
} = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload;
      console.log(action.payload, "payload");
    },
    logOut: (state) => {
      state.currentUser = null;
      localStorage.setItem("token", "");
      setAuthToken(null);
    },
  },
});

export const { addUser, logOut } = authSlice.actions;

export default authSlice.reducer;
