import React from "react";
import BookCover from "./BookCover";
import data from "../assets/data.json";

const BookLibrary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-6 gap-x-8 max-w-4xl mx-auto place-content-center sm:place-content-start">
      {data.map((book, index) => (
        <BookCover
          key={index}
          link={book.url}
          url={book.redirect}
          text={book.title}
        />
      ))}
    </div>
  );
};

export default BookLibrary;
