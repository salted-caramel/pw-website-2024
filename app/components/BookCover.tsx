import React from "react";

interface Props {
  link: string;
}

const BookCover = ({ link }: Props) => {
  return (
    <div>
      <img src={link} />
    </div>
  );
};

export default BookCover;
