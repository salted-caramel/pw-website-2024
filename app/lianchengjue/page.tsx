import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const lianchengjue = () => {
  return (
    <BookIntroPage
      title={data[11].title}
      url={data[11].url}
      stars={data[11].stars}
      intro={data[11].intro}
      readLink={data[11].bookLink}
      nlblink={data[11].nlblink}
    />
  );
};

export default lianchengjue;
