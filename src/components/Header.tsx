import React from "react";
import SearchbBar from "./Home/SearchbBar";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { MovieCategory } from "./movieCategory";
import { SeenCard } from "./movie/seenCard";
interface Prop {
  setShowAuth: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header: React.FC<Prop> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [showSearch, setShowShearch] = useState(false);
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const [watch, setWatch] = useState([]);

  useEffect(() => {
    const seen = JSON.parse(localStorage.getItem("watch") || "[]");
    if (seen) {
      console.log(seen);
      setWatch(seen);
    }
  }, []);

  const seen = JSON.stringify(localStorage.getItem("watch"));
  return (
    <div
      className={
        "h-[80px] sm:px-6 py-4 bg-[#1E293B]  border-b  border-gray-600 flex items-center gap-4 justify-between sm:px-16"
      }
    >
      <div className="flex gap-4 items-center">
        <Link to="/">
          <div className="px-4 text-cyan-400 font-bold text-3xl p-1 border border-cyan-200 rounded-md w-fit">
            CC
          </div>
        </Link>
        <Link to="/movies">
          <div className=" bg-[#22D3EE] font-bold text-xl   sm:ml-4 ml-2 lg:px-4 sm:py-2 lg:py-2 py-1 text-white rounded-lg">
            MOVIES
          </div>
        </Link>
        <div
          onClick={() => {
            setShowShearch((state) => !state);
          }}
          className=" bg-[#22D3EE] font-bold text-xl flex items-center sm:ml-4 ml-2 sm:px-4 sm:py-2 p-2 text-white rounded-full md:hidden"
        >
          <span className="material-symbols-outlined">search</span>
        </div>

        <div className="bg-[rgb(30,41,59)] hidden lg:block">
          <div className="peer px-4 py-1 bg-[#22D3EE] text-white font-bold rounded-lg text-xl">
            WATCHED
          </div>
          {watch && (
            <div
              className="hidden peer-hover:flex hover:flex
         w-fit
         flex drop-shadow-lg absolute z-50 gap-4 border  p-8 bg-black/70  rounded-md"
            >
              {watch?.map((m) => {
                return (
                  <>
                    <SeenCard id={m}></SeenCard>
                  </>
                );
              })}
            </div>
          )}
        </div>
        {showSearch && (
          <div className="flex  absolute  w-full h-[80px] bg-black/80">
            <div
              className="w-[15%] text-white flex justify-center items-center"
              onClick={() => {
                setShowShearch((state) => !state);
              }}
            >
              <span className=" text-4xl font-bold text-cyan-500 material-symbols-outlined">
                arrow_back
              </span>
            </div>
            <div className="w-[70%]  flex items-center">
              {" "}
              <SearchbBar></SearchbBar>
            </div>
          </div>
        )}
        <div className="hidden md:block">
          <SearchbBar></SearchbBar>
        </div>
      </div>

      <div className="flex  gap-6">
        <div className="hidden lg:block w-12 h-12 flex item-center align-middle  p-3 justify-center text-center  rounded-full bg-gray-600 text-gray-400 ">
          <span className="material-symbols-outlined">notifications</span>
        </div>
        <div
          className=" w-12 h-12 flex item-center align-middle  p-3 justify-center text-center  rounded-full bg-gray-600 text-gray-400  cursor-pointer"
          onClick={() => {
            props.setShowAuth(true);
          }}
        >
          <span className="  material-symbols-outlined text-center">
            person
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
