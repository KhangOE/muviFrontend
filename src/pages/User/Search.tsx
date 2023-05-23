import React, { useEffect, useState } from "react";
import { LoginForm } from "../../components/Authentication/loginForm";
import { MovieCard } from "../../components/movie/movieCard";
import { FilterSidebar } from "../../components/movie/SidebarFilter";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getMovies } from "../../redux/slice/loadMovie";
import { PaginationNav1 } from "../../components/pagination/pagination";
import { PaginationControl } from "react-bootstrap-pagination-control";
//import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

export const Search = () => {
  const { query } = useParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const { total, movie } = useSelector((state: RootState) => state.loadMovie);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState<{
    query: string | null;
    category: number[];
    sort: number;
    page: number;
  }>({
    query: query || "none",
    category: [],
    sort: 1,
    page: 1,
  });
  // const g = 2;
  useEffect(() => {
    console.log(filter);
    //console.log(typeof movie, "movie", Array.isArray(movie));
  }, [filter]);
  useEffect(() => {
    setFilter((state) => ({ ...state, page: page }));
  }, [page]);
  useEffect(() => {
    query && setFilter((state) => ({ ...state, query: query }));
  }, [query]);
  useEffect(() => {
    query && setFilter((state) => ({ ...state, query: query }));
  }, []);
  useEffect(() => {
    //console.log("dispatch");
    filter && dispatch(getMovies(filter));
  }, []);
  useEffect(() => {
    console.log("dispatch");
    filter && dispatch(getMovies(filter));
  }, [filter]);
  // function getRandomInt(min: any, max: any) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  // const call = async () => {
  //   const res = await axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=353cdaf6023c0d3d8d995ae5ed20f5bb&language=en-US&page=6"
  //     )
  //     .then(async (res) => {
  //       const a = res.data.results.forEach(async (a: any, index: any) => {
  //         const rest = await axios.post(
  //           "https://localhost:7094/api/Movie?categoryId=" +
  //             getRandomInt(1, 6) +
  //             "&categoryId=" +
  //             getRandomInt(7, 12) +
  //             "&categoryId=" +
  //             getRandomInt(12, 19) +
  //             "&actorId=" +
  //             getRandomInt(1, 6) +
  //             "&actorId=" +
  //             getRandomInt(7, 13) +
  //             "&actorId=" +
  //             getRandomInt(14, 20),
  //           {
  //             id: 0,
  //             url: "https://2embed.org/embed/movie?tmdb=" + a.id || "r",
  //             description: a.overview || "r",
  //             poster:
  //               "https://image.tmdb.org/t/p/original" + a.poster_path || "r",
  //             background:
  //               "https://image.tmdb.org/t/p/original" + a.backdrop_path || "r",
  //             title: a.original_title || "r",
  //             score: parseInt(a.vote_average) || " r",

  //             // id: 0,
  //             // url: "string",
  //             // description: "string",
  //             // poster: "string",
  //             // background: "string",
  //             // title: "string",
  //             // score: 0,
  //           }
  //         );
  //         console.log(rest);
  //       });

  //       //const a = await res.data.results[0];
  //     });
  // };

  return (
    <div className="flex gap-4 px-8 flex-col sm:flex-row">
      <div
        onClick={() => {
          setShowFilter((state) => !state);
        }}
        className=" md:hidden block text-white mt-4 px-2 py-1 text-lg font-bold bg-cyan-600  rounded-lg"
      >
        FILTER
      </div>

      {showFilter && (
        <div className="sm:w-[20%] w-full  flex justify-center md:hidden block">
          <FilterSidebar key={2} setFilter={setFilter}></FilterSidebar>
        </div>
      )}
      <div className="sm:w-[20%] w-full  flex justify-center hidden md:block">
        <FilterSidebar key={2} setFilter={setFilter}></FilterSidebar>
      </div>
      <div className="lg:w-[75%] w-ful   ">
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 min-h-[900px]">
          {" "}
          {movie?.map((m) => {
            return (
              <MovieCard
                poster={m.poster}
                title={m.title}
                id={m.id}
              ></MovieCard>
            );
          })}
        </div>
        <div className="w-full  p-4">
          {" "}
          <PaginationControl
            page={page}
            between={4}
            total={total}
            limit={15}
            changePage={(page) => {
              setPage(page);
              console.log(page);
            }}
            // ellipsis={1}
          />
        </div>
        <div className="w-full flex justify-center bg-red-400">
          <div></div>
        </div>
      </div>
    </div>
  );
};
