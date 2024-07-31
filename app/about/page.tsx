"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

interface DataProps {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const About = () => {
  const [user, setUser] = useState<DataProps | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/");
      setUser(response.data.results[0]);
    } catch (error) {
      console.error("Error, error");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-green-200 w-full h-[100vh]">
        {user && (
          <div>
            <p>
              name: {user.name.first} {user.name.last}
            </p>
            <img src={user.picture.medium} alt="userpict" />
          </div>
        )}
      </div>
      <div className="bg-red-200 w-full h-[100vh]">Hello</div>
    </div>
  );
};

export default About;
