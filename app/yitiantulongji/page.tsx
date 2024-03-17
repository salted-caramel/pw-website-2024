import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const yitian = () => {
  return (
    <BookIntroPage
      title={data[6].title}
      url={data[6].url}
      stars={data[6].stars}
      intro={data[6].intro}
      readLink={data[6].bookLink}
      nlblink={data[6].nlblink}
    />
  );
};

export default yitian;
