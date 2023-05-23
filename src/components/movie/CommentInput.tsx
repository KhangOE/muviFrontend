import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { createReview } from "../../redux/slice/reviewSlice";
import { useParams } from "react-router-dom";
import { createReviewType } from "../../Type";
import { text } from "stream/consumers";

export const CommentInput = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const currentUser = useSelector((state: RootState) => state.auth);
  const [reviewInput, setReviewInput] = useState<createReviewType>({
    text: "",
    userId: 1,
    movieId: 1,
    rating: 1,
  });
  useEffect(() => {
    id && setReviewInput((state) => ({ ...state, movieId: parseInt(id) }));
  }, []);
  useEffect(() => {
    console.log("cureentuser", currentUser);
  }, []);
  useEffect(() => {
    console.log(reviewInput, "revireInput");
  }, [reviewInput]);

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      submit();
    }
  };
  const submit = () => {
    reviewInput.text && dispatch(createReview(reviewInput));
    setReviewInput((state) => ({ ...state, text: "" }));
  };
  return (
    <div className="px-6 w-full">
      <input
        placeholder="your input here !"
        onKeyDown={handleKeyDown}
        value={reviewInput.text}
        onChange={(e) => {
          setReviewInput((state) => ({ ...state, text: e.target.value }));
        }}
        type="text"
        className="w-full border-b-2 border-cyan-500 bg-[#1E293B]  p-2 ring-0 text-white focus:ring-0 focus:outline-none"
      ></input>
      <div className="w-full flex justify-end px-4 mt-4">
        <div
          onClick={submit}
          className="px-4 py-2 text-[#06B6D4] border border-[#06B6D4] font-semibold rounded-lg w-fit hover:bg-[#06B6D4] hover:text-white cursor-pointer"
        >
          {" "}
          submit
        </div>
      </div>

      <div></div>
    </div>
  );
};
