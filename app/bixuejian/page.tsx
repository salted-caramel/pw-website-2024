import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const bixuejian = () => {
  return (
    <div>
      <BookIntroPage
        title={data[1].title}
        url={data[1].url}
        stars={data[1].stars}
        intro={data[1].intro}
        readLink={data[1].bookLink}
        nlblink={data[0].nlblink}
      />
    </div>
  );
};

export default bixuejian;
