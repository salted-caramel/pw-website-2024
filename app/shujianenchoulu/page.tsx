import React from "react";
import Nav from "../components/Nav";
import Rating from "../components/Rating";

const shujian = () => {
  return (
    <div className="bg-zinc-900 h-screen px-8">
      <Nav />
      <div className="flex flex-row gap-x-36">
        <div className="flex flex-col gap-y-4 min-w-72">
          <p className="text-2xl font-bold">书剑恩仇录</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/zh/3/33/%E6%9B%B8%E5%8A%8D%E6%81%A9%E4%BB%87%E9%8C%84.jpg"
            className="rounded-lg w-72"
          />
          <Rating rating={5} />
        </div>
        <div>
          <p className="text-xl">介绍</p>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default shujian;
