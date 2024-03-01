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
}

const BookIntroPage = ({ title, url, stars, intro, readLink }: Props) => {
  return (
    <div className="bg-zinc-900 h-screen px-8">
      <Nav />
      <div className="flex sm:flex-row flex-col gap-x-36 gap-y-20">
        <div className="flex flex-col gap-y-4 min-w-72">
          <div className="flex flex-row items-center">
            <a href="/" className="tooltip" data-tip="返回主页">
              <FaArrowLeft className="h-6 w-6 mr-4 hover:text-slate-500 transition duration-300 ease-in-out" />
            </a>
            <p className="text-2xl font-bold">{title}</p>
          </div>

          <img src={url} className="rounded-lg w-72" />
          <Rating ratingStars={stars} />
        </div>
        <div>
          <p className="text-xl">介绍</p>
          <p className="text-lg mb-10 mt-3">{intro}</p>
          <a
            href={readLink}
            target="_blank"
            className="btn btn-error float-end"
          >
            线上免费阅读 <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookIntroPage;
