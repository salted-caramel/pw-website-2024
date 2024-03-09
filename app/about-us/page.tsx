import React from "react";
import Nav from "../components/Nav";
import PersonCard from "../components/PersonCard";

const aboutus = () => {
  return (
    <div className="bg-zinc-900 h-screen px-8">
      <Nav />
      <div>
        <p className="text-3xl">我们的组员</p>
        <div className="flex sm:flex-row flex-col gap-6 sm:justify-center align-center">
          <PersonCard
            name="李俊緯"
            image="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            isLeader={true}
          />
          <PersonCard
            name="刘宗翰"
            image="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
          <PersonCard
            name="周睿宇"
            image="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
          <PersonCard
            name="李熙源"
            image="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default aboutus;
