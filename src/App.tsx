import React, { useEffect, useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/User/Home";
import Layout from "./Layout/Layout";
import Watch from "./pages/User/Watch";
import { Movies } from "./pages/User/movies";

import { getMovie } from "./service/movieService";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { RootState } from "./redux/store";
import { AppDispatch } from "./redux/store";
import { getReviewByMovieApi } from "./service/reviewServices";
import { logOut } from "./redux/slice/authSlice";
import setAuthToken from "./utils/setAuthToken";
import { LoginApi, getUser } from "./service/userService";
import { addUser } from "./redux/slice/authSlice";

import Login from "./components/Authentication/Login";
import axiosClient from "./service/axiosClient";
import { MovieDetail } from "./pages/User/MovieDetail";
import { Search } from "./pages/User/Search";
function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const call = async () => {
      const res = await axios.post(
        "https://localhost:7094/api/Review",
        {
          text: "123",
          rating: 0,
        },
        {
          params: {
            userId: 1,
            movieId: 36,
          },
        }
      );
      console.log(res);
    };
    //call();
  }, []);
  useEffect(() => {
    console.log("goo");
    if (localStorage.getItem("token") == "") {
      console.log("log out");
      dispatch(logOut());
    } else {
      console.log("loogin");
      setAuthToken(localStorage.getItem("token"));
      const getCurrentUser = async () => {
        try {
          const res = await getUser();
          if (res.data) {
            dispatch(addUser(res.data));
            console.log("log in", res);
          }
        } catch (error) {
          dispatch(logOut());
        }
      };
      getCurrentUser();
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home />} />
          <Route path="movies/:id" element={<MovieDetail></MovieDetail>} />
          <Route path="movies/:id/watch" element={<Watch></Watch>}></Route>
          <Route path="search/:query" element={<Search></Search>} />
          <Route path="movies" element={<Movies></Movies>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
