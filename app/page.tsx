"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [isShow, setIsShow] = useState(false);
  const [navBg, setNavBg] = useState("bg-slate-300");

  const clickHandler = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg("bg-blue-200");
      } else {
        setNavBg("bg-slate-300");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!isShow && (
        <div
          className={`hidden md:grid grid-cols-3 justify-between p-2 ${navBg} sticky top-0 z-50`}
        >
          <div>Logo</div>
          <div>
            <ul className="flex flex-row gap-2 px-2">
              <li>Home</li>
              <li>
                <Link href="/about">About</Link>
              </li>
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
        <div className={`fixed top-0 left-0 w-[50vw] h-full ${navBg}`}>
          Menu
          <button className="bg-blue-300 z-50" onClick={clickHandler}>
            Drawer
          </button>
          <div>
            <ul className="flex flex-col gap-2 px-2">
              <li>Home</li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>Career</li>
            </ul>
          </div>
        </div>
      )}

      <div>
        <div className="bg-green-200 w-full h-[100vh]">Hello</div>
        <div className="bg-red-200 w-full h-[100vh]">Hello</div>
      </div>
    </>
  );
};

export default Home;
