import React from "react";
import { BarSlide } from "../BarSlide";

interface Prop {
  image: string[];
  id: (number | null)[];
  title: string;
}
const BarFilm: React.FC<Prop> = (props) => {
  return (
    <div className="">
      <h1 className="text-cyan-300 font-bold text-2xl pl-4 pb-2 uppercase">
        {props.title}
      </h1>
      <BarSlide image={props.image} id={props.id}></BarSlide>
    </div>
  );
};

export default BarFilm;
