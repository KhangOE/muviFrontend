import React, { useEffect, useState } from "react";
import { useStore } from "react-redux";
import { Link } from "react-router-dom";
import { movieType } from "../../Type";
import { getMovie } from "../../service/movieService";

export const SeenCard = (props: { id: number }) => {
  const [movie, setMovie] = useState<movieType>();
  useEffect(() => {
    const call = async () => {
      const res = await getMovie(props.id);
      setMovie(res.data);
    };
    call();
  }, []);
  return (
    <Link
      to={"/movies/" + (props.id && props.id.toString()) || ""}
      className="bg-[rgb(30,41,59)]"
    >
      <div className=" w-full h-full rounded-lg max-w-[200px] ">
        <img className="w-full bg-cover rounded-lg" src={movie?.poster}></img>
        <div className="text-white">{movie?.title}</div>
      </div>
    </Link>
  );
};
