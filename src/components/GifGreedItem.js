import React from "react";

export const GifGreedItem = ({ id, title, url }) => {
  console.log({ id, title, url });
  return (
    <div className="card animate__backInDown">
      <p>{title}</p>
      <img src={url} alt={title}></img>
    </div>
  );
};
