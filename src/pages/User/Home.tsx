import React, { useState, useEffect } from "react";

import HomeBanner from "../../components/Home/HomeBanner";
import BarFilm from "../../components/Home/BarFilm";
import { getMoviesApi } from "../../service/movieService";
import { movieType } from "../../Type";

const Home = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [popMovies, setPopMovies] = useState([]);
  useEffect(() => {
    const call = async () => {
      const newMovie = await getMoviesApi({
        category: [],
        page: 1,
        sort: 0,
        query: null,
      });
      setNewMovies(newMovie.data.moviePaginate);

      const popMovie = await getMoviesApi({
        category: [],
        page: 1,
        sort: 1,
        query: null,
      });
      setPopMovies(popMovie.data.moviePaginate);
    };
    call();
  }, []);

  useEffect(() => {
    console.log(newMovies, popMovies);
  }, [newMovies]);
  return (
    <div className="">
      <HomeBanner></HomeBanner>
      <div className="flex flex-col gap-8 px-2 py-8">
        <div className="px-8 ">
          <BarFilm
            id={newMovies?.map((m: movieType) => m.id)}
            image={newMovies?.map((m: movieType) => m.poster)}
            title="NEW RELEASED"
          ></BarFilm>
        </div>

        <div className="px-8 ">
          <BarFilm
            id={popMovies?.map((m: movieType) => m.id)}
            image={popMovies?.map((m: movieType) => m.poster)}
            title="TOP RATING"
          ></BarFilm>
        </div>

        <div className="px-8">
          <BarFilm
            id={newMovies?.map((m: movieType) => m.id)}
            image={newMovies?.map((m: movieType) => m.poster)}
            title="POPPULAR"
          ></BarFilm>
        </div>
      </div>
      {/* <BarFilm data="data" title="Phim mới"></BarFilm>
      <BarFilm data="data" title="phim đã xem"></BarFilm> */}
    </div>
  );
};

export default Home;
