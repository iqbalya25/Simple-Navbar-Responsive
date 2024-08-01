import React from "react";
import Navbar from "../components/Navbar";
import FormSection from "../components/Form";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-green-100 w-full h-[100vh]">
        <FormSection />
      </div>
      <div className="bg-blue-100 w-full h-[100vh]">Body</div>
    </div>
  );
};

export default Home;
