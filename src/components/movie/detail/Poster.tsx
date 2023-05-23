import React from "react";

export const Poster = (props: { poster: string }) => {
  return (
    <div>
      <img className="rounded-md w-full" src={props.poster}></img>
    </div>
  );
};
