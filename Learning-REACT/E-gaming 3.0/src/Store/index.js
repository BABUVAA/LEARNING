import {configureStore} from "@reduxjs/toolkit"
import gameSlice from "./GamesSlice";
import loginSlice from "./LoginState";


const platformStore =configureStore({
reducer:{
  games: gameSlice.reducer,
  login: loginSlice.reducer,
}
})
export default platformStore;