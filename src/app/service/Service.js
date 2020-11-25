import React from "react";

function Service({ data }) {
  return (
    <div className="">
      <p className="font-bold text-blue-500 text-xl mb-2">{data.title}</p>
      {data.images.map((img) => (
        <img src={`${process.env.REACT_APP_BACKEND_URL}/${img.url}`} />
      ))}
    </div>
  );
}

export default Service;
