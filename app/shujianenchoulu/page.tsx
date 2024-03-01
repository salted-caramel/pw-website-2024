import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const shujian = () => {
  return (
    <BookIntroPage
      title={data[0].title}
      url={data[0].url}
      stars={data[0].stars}
      intro={data[0].intro}
      readLink={data[0].bookLink}
    />
  );
};

export default shujian;
