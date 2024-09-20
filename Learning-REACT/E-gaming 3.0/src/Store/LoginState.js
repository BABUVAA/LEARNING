import { createSlice } from "@reduxjs/toolkit";

const loginSlice=createSlice({
name: 'login',
initialState: false,
reducers:{
  toggleLogin: (state) => {
    console.log(state);
    return(!state);
  }
}
})

export const loginActions = loginSlice.actions;
export default loginSlice;