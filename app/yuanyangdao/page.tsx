import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const yuanyangdao = () => {
  return (
    <BookIntroPage
      title={data[12].title}
      url={data[12].url}
      stars={data[12].stars}
      intro={data[12].intro}
      readLink={data[12].bookLink}
      nlblink={data[12].nlblink}
    />
  );
};

export default yuanyangdao;
