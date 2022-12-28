import React from "react";
import Corousel from "./Corousel";
import Coments from "./Coments";
import FAQ from "./FAQ";
 
function Home(props) {
  return (
    <div className="container">
      <Corousel />
      <Coments />
      <FAQ />
    </div>
  );
}

export default Home;
