import React, { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Profile from "../Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { userType } from "../../Type";

import { getMovieById } from "../../redux/slice/movieSlice";
interface Prop {
  setShowAuth: React.Dispatch<React.SetStateAction<boolean>>;
}
const Auth: React.FC<Prop> = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  //const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const { currentUser } = useSelector((state: RootState) => state.auth);
  //const m = useSelector<RootState>((state) => state.movie);
  useEffect(() => {
    console.log("asd", currentUser?.email);
  }, []);

  return (
    <div className="fixed top-0 right-0 min-h-screen bg-black/80 w-[350px] z-50 text-gray-400 py-12 px-4 ">
      <div
        className="text-white absolute top-1 left-1 text-xl p-2 cursor-pointer"
        onClick={() => {
          props.setShowAuth(false);
        }}
      >
        x
      </div>
      <div className="font-bold text-xl text-white"> {currentUser?.name}</div>
      <div className="font-semi"> {currentUser?.email}</div>
      {currentUser?.id ? (
        <Profile></Profile>
      ) : (
        <div>
          {" "}
          <div
            className="cursor-pointer"
            onClick={() => {
              //setIsAuth(true);
            }}
          ></div>
          <div className="uppercase font-bold flex gap-4 text-sm">
            <div
              className={
                isLogin
                  ? `border-b-2 border-red-500 cursor-pointer`
                  : `cursor-pointer`
              }
              onClick={() => {
                setIsLogin(true);
              }}
            >
              đăng nhập
            </div>

            <div
              className={
                isLogin
                  ? ` cursor-pointer`
                  : `border-b-2 border-red-500 cursor-pointer`
              }
              onClick={() => {
                setIsLogin(false);
              }}
            >
              đăng ký
            </div>
          </div>
          {isLogin ? <Login></Login> : <Register></Register>}
        </div>
      )}
    </div>
  );
};

export default Auth;
