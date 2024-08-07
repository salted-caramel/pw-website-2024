"use client";
import React from "react";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar sticky top-0 z-10 duration-300 px-8 ${
        isScrolled ? "bg-gray-300 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        {/* Mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/" className="text-lg">
                首页
              </a>
            </li>
            <li>
              <a href="about-author" className="text-lg">
                关于金庸
              </a>
            </li>
            {/* <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href="/facts" className="text-lg">
                武侠小知识
              </a>
            </li>
            <li>
              <a href="/timeline" className="text-lg">
                时间线
              </a>
            </li>
            <li>
              <a href="/game" className="text-lg">
                游戏辅助
              </a>
            </li>
            <li>
              <a href="/about-us" className="text-lg">
                关于我们
              </a>
            </li>
          </ul>
        </div>
        <a className="text-xl cursor-pointer text-black" href="/">
          叱咤武林
        </a>
      </div>
      {/* Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="about-author" className="text-black">
              关于金庸
            </a>
          </li>
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <a href="facts" className="text-black">
              武侠小知识
            </a>
          </li>
          <li>
            <a href="timeline" className="text-black">
              时间线
            </a>
          </li>
          <li>
            <a href="vlog" className="text-black">
              视频
            </a>
          </li>
          <li>
            <a href="game" className="text-black">
              游戏辅助
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden sm:flex sm:flex-row sm:navbar-end">
        <a
          href="/about-us"
          className="text-xl cursor-pointer text-black hover:text-gray-800"
        >
          关于我们
        </a>
      </div>
    </div>
  );
};

export default Nav;
