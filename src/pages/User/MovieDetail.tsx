import React, { useEffect } from "react";
import { Poster } from "../../components/movie/detail/Poster";
import { Detail } from "../../components/movie/detail/Detail";
import CastList from "../../components/movie/detail/CastList";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Link, useParams } from "react-router-dom";
import { getMovieById } from "../../redux/slice/movieSlice";
import { Rating } from "../../components/movie/detail/rating";
import { Genre } from "../../components/movie/detail/Genre";
export const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const movie = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    id && dispatch(getMovieById(parseInt(id)));
  }, []);

  useEffect(() => {
    console.log(movie.movie.background);
  }, [movie]);
  return (
    <>
      <div
        style={{ backgroundImage: `url(${movie.movie.background})` }}
        className={`w-full     md:min-h-[600px] min-h-1000 

    bg-cover bg-cente relative`}
      >
        <div className=" text-white  backdrop-brightness-125 absolute bg-black/70 top-0 left-0 right-0 bottom-0 min-w-full">
          <div className="flex flex-col lg:flex-row w-full items-center gap-8 ">
            <div className="  lg:w-[30%] w-full p-12">
              {" "}
              <Poster poster={movie.movie.poster}></Poster>
            </div>

            <div className="lg:w-[70%] w-fu;;">
              <Detail
                description={movie.movie.description}
                title={movie.movie.title}
                categories={movie.movie.categories || []}
              ></Detail>
              <Link to={"/movies/" + id + "/watch"}>
                {" "}
                <div className="px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg w-fit mt-4">
                  Watch Now
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <CastList></CastList>
      </div>
    </>
  );
};
