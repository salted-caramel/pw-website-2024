import React from "react";
import BookCover from "./BookCover";

const BookLibrary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-6 gap-x-8 max-w-4xl mx-auto">
      <BookCover
        link="https://upload.wikimedia.org/wikipedia/zh/3/33/%E6%9B%B8%E5%8A%8D%E6%81%A9%E4%BB%87%E9%8C%84.jpg"
        url="/shujianenchoulu"
        text="书剑恩仇录 "
      />
      <BookCover
        link="https://upload.wikimedia.org/wikipedia/zh/3/33/%E6%9B%B8%E5%8A%8D%E6%81%A9%E4%BB%87%E9%8C%84.jpg"
        url="/shujianenchoulu"
        text="test"
      />
      <BookCover
        link="https://upload.wikimedia.org/wikipedia/zh/3/33/%E6%9B%B8%E5%8A%8D%E6%81%A9%E4%BB%87%E9%8C%84.jpg"
        url="/shujianenchoulu"
        text="test"
      />
      <BookCover
        link="https://upload.wikimedia.org/wikipedia/zh/3/33/%E6%9B%B8%E5%8A%8D%E6%81%A9%E4%BB%87%E9%8C%84.jpg"
        url="/shujianenchoulu"
        text="test"
      />
    </div>
  );
};

export default BookLibrary;
