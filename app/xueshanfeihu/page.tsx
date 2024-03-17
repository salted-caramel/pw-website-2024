import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const xueshanfeihu = () => {
  return (
    <BookIntroPage
      title={data[2].title}
      url={data[2].url}
      stars={data[2].stars}
      intro={data[2].intro}
      readLink={data[2].bookLink}
      nlblink={data[2].nlblink}
    />
  );
};

export default xueshanfeihu;
