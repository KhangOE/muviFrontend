import React from "react";
import { SuggestVideoItem } from "./suggestVideoItem";
import { Link } from "react-router-dom";

export const SuggestVideo = () => {
  return (
    <div className="px-6 py-4 flex-col gap-4 flex bg-[#1E293B] h-full">
      <Link to={"/movies/" + 106}>
        <div className="flex">
          <img
            src="https://image.tmdb.org/t/p/original//9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg"
            className="rounded-md w-[50%]"
          ></img>
          <div className="text-xl bold text-white">Khế Ước (2023)</div>
        </div>
      </Link>
      <Link to={"/movies/" + 106}>
        <div className="flex">
          <img
            src="https://image.tmdb.org/t/p/original/ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg"
            className="rounded-md w-[50%]"
          ></img>
          <div className="text-xl bold text-white">
            Winnie the Pooh: Blood and Honey
          </div>
        </div>
      </Link>
      <Link to={"/movies/" + 52}>
        <div className="flex">
          <img
            src="https://image.tmdb.org/t/p/original/9NXAlFEE7WDssbXSMgdacsUD58Y.jpg"
            className="rounded-md w-[50%]"
          ></img>
          <div className="text-xl bold text-white">Peter Pan & Wendy</div>
        </div>
      </Link>
      <Link to={"/movies/" + 57}>
        <div className="flex">
          <img
            src="https://image.tmdb.org/t/p/original/m6Yt77C9u7Aume9dTJMCSRzWDED.jpg"
            className="rounded-md w-[50%]"
          ></img>
          <div className="text-xl bold text-white">Clock</div>
        </div>
      </Link>
    </div>
  );
};
