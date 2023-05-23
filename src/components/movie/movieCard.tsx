import React from "react";
import { Link } from "react-router-dom";

export const MovieCard = (props: {
  poster: string;
  title: string;
  id: number | null;
}) => {
  return (
    <Link to={"/movies/" + (props.id && props.id.toString()) || ""}>
      <div className=" w-full h-full rounded-lg">
        <img className="w-full bg-cover rounded-lg" src={props.poster}></img>
        <div className="text-white">{props.title}</div>
      </div>
    </Link>
  );
};
