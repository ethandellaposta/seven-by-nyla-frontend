import React from "react";
import { Welcome } from "../common/Welcome";
import { getImageSrc } from "../util";

function Home({ data }) {
  const { about: { bio, image }} = data;

  return (
    <div className="flex pt-8 px-40">
      <div className="flex flex-col justify-start mr-4">
        <Welcome bio={bio} />
        <img src={getImageSrc(image.url)} className="w-96 mt-5" />
      </div>
    </div>
  );
}

export default Home;
