import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const tianlongbabu = () => {
  return (
    <BookIntroPage
      title={data[7].title}
      url={data[7].url}
      stars={data[7].stars}
      intro={data[7].intro}
      readLink={data[7].bookLink}
      nlblink={data[7].nlblink}
    />
  );
};

export default tianlongbabu;
