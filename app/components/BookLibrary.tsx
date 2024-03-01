import React from "react";
import BookCover from "./BookCover";
import data from "../assets/data.json";

const BookLibrary = () => {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-6 gap-x-8 max-w-4xl mx-auto place-content-center sm:place-content-start">
    //   <BookCover
    //     link={data[0].url}
    //     url="/shujianenchoulu"
    //     text={data[0].title}
    //   />
    //   <BookCover link={data[1].url} url="/bixuejian" text={data[1].title} />
    // </div>
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-6 gap-x-8 max-w-4xl mx-auto place-content-center sm:place-content-start">
      {data.map((book, index) => (
        <BookCover
          key={index}
          link={book.url}
          url="/bixuejian"
          text={book.title}
        />
      ))}
    </div>
  );
};

export default BookLibrary;
