import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const shendiao = () => {
  return (
    <BookIntroPage
      title={data[5].title}
      url={data[5].url}
      stars={data[5].stars}
      intro={data[5].intro}
      readLink={data[5].bookLink}
      nlblink={data[5].nlblink}
    />
  );
};

export default shendiao;
