import {createSlice} from "@reduxjs/toolkit"

const DEFAULT_VALUE =[
  {
    id: 1,
    src: "/CocName.png",
    background: "/CocBackground.jpg",
    character: "/CocChar.png",
  },
  {
    id: 2,
    src: "/PubgName.png",
    background: "/PubgBackground.jpg",
    character: "/PubgChar.png",
  },
  {
    id: 3,
    src: "/PubgName.png",
    background: "/PubgBackground.jpg",
    character: "/PubgChar.png",
  },  
];
const gameSlice =createSlice({
  name:'games',
  initialState:DEFAULT_VALUE,
  reducers:{},
})

export const gameActions = gameSlice.actions;
export default gameSlice;