import React from "react";
import Nav from "../components/Nav";
import Rating from "../components/Rating";

const shujian = () => {
  return (
    <div className="bg-zinc-900">
      <Nav />
      <img src="https://upload.wikimedia.org/wikipedia/zh/3/33/%E6%9B%B8%E5%8A%8D%E6%81%A9%E4%BB%87%E9%8C%84.jpg" />
      <Rating rating={5} />
    </div>
  );
};

export default shujian;
