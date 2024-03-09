import React from "react";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="text-xl cursor-pointer" href="/">
          叱咤武林
        </a>{" "}
      </div>

      <div className="flex-none">
        <a className="text-xl cursor-pointer" href="/about-us">
          关于我们
        </a>
      </div>
    </div>
  );
};

export default Nav;
