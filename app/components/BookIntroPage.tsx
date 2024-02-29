import React from "react";
import Nav from "./Nav";
import Rating from "./Rating";

interface Props {
  title: string;
  url: string;
  stars: number;
  intro: string;
}

const BookIntroPage = ({ title, url, stars, intro }: Props) => {
  return (
    <div className="bg-zinc-900 h-screen px-8">
      <Nav />
      <div className="flex flex-row gap-x-36">
        <div className="flex flex-col gap-y-4 min-w-72">
          <p className="text-2xl font-bold">{title}</p>
          <img src={url} className="rounded-lg w-72" />
          <Rating ratingStars={stars} />
        </div>
        <div>
          <p className="text-xl">介绍</p>
          <p className="text-lg">{intro}</p>
        </div>
      </div>
    </div>
  );
};

export default BookIntroPage;
