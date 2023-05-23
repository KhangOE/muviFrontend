import React from "react";

export const DescriptionVideo = (props: {
  description: string;
  title: string;
}) => {
  return (
    <div>
      <div className="text-white font-bold text-xl">{props.title}</div>
      <div className="text-white">{props.description}</div>
    </div>
  );
};
