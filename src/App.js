import React from "react";
// import MessageBox from "./state-fumc";
// import "./style.css";
// import { EventData2 } from "./event-data";
// import RefsArray from "./refs-array";
import { userContext } from "./context";
import Content from "./context-content";

export default function App() {
  return (
    <userContext.Provider value={"Tom Jerry"}>
      <Content />
    </userContext.Provider>
  );
}
