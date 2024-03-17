import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const ludingji = () => {
  return (
    <BookIntroPage
      title={data[9].title}
      url={data[9].url}
      stars={data[9].stars}
      intro={data[9].intro}
      readLink={data[9].bookLink}
      nlblink={data[9].nlblink}
    />
  );
};

export default ludingji;
