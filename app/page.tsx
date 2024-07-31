"use client";
import React, { useState } from "react";

const Home = () => {
  const [isShow, setIsShow] = useState(false);

  const clickHandler = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {!isShow && (
        <div className="hidden md:grid grid-cols-3 justify-between p-2 bg-slate-300">
          <div>Logo</div>
          <div>
            <ul className="flex flex-row gap-2 px-2">
              <li>Home</li>
              <li>About</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="text-right">Login</div>
        </div>
      )}

      {!isShow && (
        <button className="bg-blue-300 md:hidden z-50" onClick={clickHandler}>
          Drawer
        </button>
      )}

      {isShow && (
        <div className="fixed top-0 left-0 w-[50vw] h-full bg-slate-400">
          Menu
          <button className="bg-blue-300 z-50" onClick={clickHandler}>
            Drawer
          </button>
          <div>
            <ul className="flex flex-col gap-2 px-2">
              <li>Home</li>
              <li>About</li>
              <li>Career</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
