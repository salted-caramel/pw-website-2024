import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const feihuwaizhuan = () => {
  return (
    <BookIntroPage
      title={data[3].title}
      url={data[3].url}
      stars={data[3].stars}
      intro={data[3].intro}
      readLink={data[3].bookLink}
      nlblink={data[3].nlblink}
    />
  );
};

export default feihuwaizhuan;
