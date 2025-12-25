import React from "react";
// import "./style.css";
import { Header, Content, Footer } from "./func-components";
import Calendar from "./class-components";

function App() {
  return (
    <>
      <Header />
      <p>
        <center>
          <Calendar />
        </center>
      </p>
      <Content />
      <Footer />
    </>
    // [<Header />, <Content />, <Footer />]
  );
}

export default App;
