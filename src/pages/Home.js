import React from "react";
import Accordions from "../components/Accordions";

const Home = () => {
  return (
    <div>
      <div>cards goes here...</div>
      <div className="bg-secondaryLight">
        <Accordions />
      </div>
      <div className="bg-white">call to action goes here..</div>
    </div>
  );
};

export default Home;
