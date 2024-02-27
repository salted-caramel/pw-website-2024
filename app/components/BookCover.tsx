import React from "react";

interface Props {
  link: string;
  url: string;
}

const BookCover = ({ link, url }: Props) => {
  return (
    <a href={url}>
      <img
        src={link}
        className="rounded-lg shadow-md transition duration-150 ease-out hover:ease-linear hover:border hover:scale-105"
        alt="Book cover"
      />
    </a>
  );
};

export default BookCover;
