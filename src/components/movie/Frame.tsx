import React from "react";

export const Frame = (props: { url: string }) => {
  return (
    <div>
      <iframe
        allowFullScreen
        className="bg-white w-full h-[600px]"
        src={props.url}
      ></iframe>
    </div>
  );
};
