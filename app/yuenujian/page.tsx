import React from "react";
import BookIntroPage from "../components/BookIntroPage";
import data from "../assets/data.json";

const yuenujian = () => {
  return (
    <BookIntroPage
      title={data[14].title}
      url={data[14].url}
      stars={data[14].stars}
      intro={data[14].intro}
      readLink={data[14].bookLink}
      nlblink={data[14].nlblink}
    />
  );
};

export default yuenujian;
