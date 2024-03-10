import React from "react";
import { FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

import Nav from "./Nav";
import Rating from "./Rating";

interface Props {
  title: string;
  url: string;
  stars: number;
  intro: string;
  readLink: string;
  nlblink: string;
}

const BookIntroPage = ({
  title,
  url,
  stars,
  intro,
  readLink,
  nlblink,
}: Props) => {
  return (
    <div className="bg-zinc-900 h-screen px-8">
      <Nav />
      <div className="flex sm:flex-row flex-col gap-x-36 gap-y-20">
        <div className="flex flex-col gap-y-4 min-w-72">
          <div className="flex flex-row items-center">
            <a href="/" className="tooltip" data-tip="返回主页">
              <FaArrowLeft className="h-6 w-6 mr-4 hover:text-slate-500 transition duration-300 ease-in-out" />
            </a>
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>

          <img src={url} className="rounded-lg w-72" />
          <Rating ratingStars={stars} />
        </div>
        <div>
          <h2 className="text-xl">介绍</h2>
          <p className="text-lg mb-10 mt-3">{intro}</p>
          <div className="flex flex-row-reverse gap-x-4">
            <a
              href={readLink}
              target="_blank"
              className="btn btn-error float-end"
            >
              线上免费阅读 <FaExternalLinkAlt />
            </a>
            <a href={nlblink} target="_blank" className="btn btn-info">
              NLB借阅 <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookIntroPage;
