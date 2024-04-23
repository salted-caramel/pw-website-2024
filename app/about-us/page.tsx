import React from "react";

import Nav from "../components/Nav";
import PersonCard from "../components/PersonCard";

import jerryImg from "../../public/images/jerry.jpg";
import jwImg from "../../public/images/jw.jpg";
import xyImg from "../../public/images/xiyuan.jpg";
import ryImg from "../../public/images/ruiyu.jpg";

const aboutus = () => {
  return (
    <div className="bg-main bg-cover h-screen px-8">
      <Nav />
      <div>
        <p className="text-3xl text-black">我们的组员</p>
        <div className="flex sm:flex-row flex-col gap-6 sm:justify-center align-center">
          <PersonCard name="李俊緯" image={jwImg} isLeader={true} />
          <PersonCard name="刘宗翰" image={jerryImg} />
          <PersonCard name="周睿宇" image={ryImg} />
          <PersonCard name="李熙源" image={xyImg} />
        </div>
      </div>
    </div>
  );
};

export default aboutus;
