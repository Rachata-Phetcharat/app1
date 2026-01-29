import React from "react";
// import MessageBox from "./state-fumc";
// import "./style.css";
// import { EventData2 } from "./event-data";
// import RefsArray from "./refs-array";
// import Content from "./context-content";
import { userContext } from "./context";
import { Header2 } from "./context-header2";
import Content2 from "./context-content2";

export default function App() {
  let [user, SetUser] = React.useState("");
  return (
    <userContext.Provider value={[user, SetUser]}>
      <Header2 />
      <Content2 />
    </userContext.Provider>
  );
}
