import React from "react";
import BookCover from "./BookCover";
import data from "../assets/data.json";

const BookLibrary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-6 gap-x-8 max-w-4xl mx-auto">
      <BookCover
        link={data[0].url}
        url="/shujianenchoulu"
        text={data[0].title}
      />
      <BookCover
        link="https://upload.wikimedia.org/wikipedia/zh/5/52/%E7%A2%A7%E8%A1%80%E5%8A%8D.jpg"
        url="/bixuejian"
        text="碧血剑"
      />
    </div>
  );
};

export default BookLibrary;
