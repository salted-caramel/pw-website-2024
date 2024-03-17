import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const baima = () => {
  return (
    <BookIntroPage
      title={data[13].title}
      url={data[13].url}
      stars={data[13].stars}
      intro={data[13].intro}
      readLink={data[13].bookLink}
      nlblink={data[13].nlblink}
    />
  );
};

export default baima;
