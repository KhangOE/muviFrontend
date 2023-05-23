import React, { useEffect } from "react";
import { Rating } from "./rating";
import { Genre } from "./Genre";
import CastList from "./CastList";
import { categoryType } from "../../../Type";

export const Detail = (props: {
  description: string;
  title: string;
  categories: categoryType[];
}) => {
  useEffect(() => {
    console.log(props.categories);
  });
  return (
    <div className="flex flex-col gap-4 text-white w-full">
      <div className="text-3xl font-bold">{props.title}</div>
      <div>{props.description}</div>
      <Rating></Rating>
      <div className="flex gap-4">
        {props.categories.map((m) => {
          return (
            <div className="px-4 py-2 border border-gray-300">{m.title}</div>
          );
        })}
      </div>
    </div>
  );
};
