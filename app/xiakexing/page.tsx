import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const xiakexing = () => {
  return (
    <BookIntroPage
      title={data[10].title}
      url={data[10].url}
      stars={data[10].stars}
      intro={data[10].intro}
      readLink={data[10].bookLink}
      nlblink={data[10].nlblink}
    />
  );
};

export default xiakexing;
