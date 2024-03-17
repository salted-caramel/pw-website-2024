import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const shediao = () => {
  return (
    <BookIntroPage
      title={data[4].title}
      url={data[4].url}
      stars={data[4].stars}
      intro={data[4].intro}
      readLink={data[4].bookLink}
      nlblink={data[4].nlblink}
    />
  );
};

export default shediao;
