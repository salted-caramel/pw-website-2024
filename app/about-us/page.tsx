import React from "react";

import Nav from "../components/Nav";
import PersonCard from "../components/PersonCard";

import jerryImg from "../../public/images/jerry.jpg";
import jwImg from "../../public/images/jw.jpg";
import blankImg from "../../public/images/blankuser.png";

const aboutus = () => {
  return (
    <div className="bg-zinc-900 h-screen px-8">
      <Nav />
      <div>
        <p className="text-3xl">我们的组员</p>
        <div className="flex sm:flex-row flex-col gap-6 sm:justify-center align-center">
          <PersonCard name="李俊緯" image={jwImg} isLeader={true} />
          <PersonCard name="刘宗翰" image={jerryImg} />
          <PersonCard name="周睿宇" image={blankImg} />
          <PersonCard name="李熙源" image={blankImg} />
        </div>
      </div>
    </div>
  );
};

export default aboutus;
