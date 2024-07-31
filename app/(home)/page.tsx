import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-green-100 w-full h-[100vh]">Header</div>
      <div className="bg-blue-100 w-full h-[100vh]">Body</div>
    </div>
  );
};

export default Home;
