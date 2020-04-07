import { createContext } from "react";

export const AppContext = createContext({
  transitionDuration: 1000,
  scrollY: 0,
  wheelActive: false,
  scrollTo: () => {},
  location: {
    current: "",
    previous: ""
  }
});
