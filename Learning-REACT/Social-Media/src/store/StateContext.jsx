import { createContext, useState } from "react";
import { PostItemsProvider } from "./PostListContext";
export const StateContext = createContext();

const StateContextProvider = ({ children }) => {
  const [state, setState] = useState("Home");
  return (
    <StateContext.Provider value={{ state, setState }}>
      <PostItemsProvider>{children}</PostItemsProvider>
    </StateContext.Provider>
  );
};
export default StateContextProvider;
