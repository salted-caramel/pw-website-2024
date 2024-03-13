import React from "react";

interface Props {
  link: string;
  url: string;
  text: string;
}

const BookCover = ({ link, url, text }: Props) => {
  return (
    <a href={url} className="">
      <div className="group relative">
        <img
          src={link}
          className="rounded-lg shadow-md w-full"
          alt="Book cover"
        />
        <div className="absolute rounded-lg inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out">
          <p className="text-center text-white text-lg px-4 py-2 hidden sm:block">
            {text}
          </p>
        </div>
        <p className="text-white text-center sm:hidden block text-xl mt-1">
          {text}
        </p>
      </div>
    </a>
  );
};

export default BookCover;
