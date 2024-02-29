import React from "react";

interface Props {
  link: string;
  url: string;
  text: string; // Added text prop for hover content
}

const BookCover = ({ link, url, text }: Props) => {
  return (
    <a href={url}>
      <div className="group relative">
        <img src={link} className="rounded-lg shadow-md" alt="Book cover" />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300 ease-in-out">
          <p className="text-center text-white text-lg px-4 py-2">{text}</p>
        </div>
        <p className="text-white text-center sm:hidden block">{text}</p>
      </div>
    </a>
  );
};

export default BookCover;
