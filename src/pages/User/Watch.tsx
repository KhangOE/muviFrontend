import React, { useEffect } from "react";
import { Frame } from "../../components/movie/Frame";
import { SuggestVideo } from "../../components/movie/SuggestVideo";
import { DescriptionVideo } from "../../components/movie/DescriptionVideo";
import { CommentInput } from "../../components/movie/CommentInput";
import { CommentList } from "../../components/movie/CommentList";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getReviewMovie } from "../../redux/slice/reviewSlice";
import { reviewType } from "../../Type";

const Watch = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const movie = useSelector((state: RootState) => state.movie.movie);
  const { review } = useSelector((state: RootState) => state.reviews);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    id && dispatch(getReviewMovie(parseInt(id)));
  }, []);

  useEffect(() => {
    const seen =
      localStorage.getItem("watch") &&
      JSON.parse(localStorage.getItem("watch") || "1");
    if (seen) {
    }
    console.log(seen, "watch");
    if (seen) {
      if (!seen.includes(id)) {
        localStorage.setItem("watch", JSON.stringify([id, ...seen]));
      }
    } else {
      localStorage.setItem("watch", JSON.stringify([id]));
    }
  }, []);

  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-[80%]  flex flex-col gap-2 p-4 gap-6">
          <Frame url={movie.url}></Frame>
          <DescriptionVideo
            description={movie.description}
            title={movie.title}
          ></DescriptionVideo>
          {currentUser ? (
            <CommentInput></CommentInput>
          ) : (
            <div className="w-full py-4  text-white font bold border-b border-cyan-300">
              Login to comment
            </div>
          )}

          {review &&
            review?.map((r: reviewType) => {
              return (
                <>
                  <CommentList
                    text={r.text}
                    userName={r.userName}
                  ></CommentList>
                </>
              );
            })}
        </div>

        <div className="flex-1 bg-white/40">
          <SuggestVideo></SuggestVideo>
        </div>
      </div>
    </div>
  );
};

export default Watch;
