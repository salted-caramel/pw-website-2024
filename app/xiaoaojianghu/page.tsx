import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const xiaoao = () => {
  return (
    <BookIntroPage
      title={data[8].title}
      url={data[8].url}
      stars={data[8].stars}
      intro={data[8].intro}
      readLink={data[8].bookLink}
      nlblink={data[8].nlblink}
    />
  );
};

export default xiaoao;
