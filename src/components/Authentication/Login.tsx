import React from "react";
import { LoginForm } from "./loginForm";

const Login: React.FC = () => {
  return (
    <div>
      <div className="w-full my-4 flex justify-center">
        <LoginForm></LoginForm>
      </div>

      <div className="border-b border-gray-200  w-full"></div>

      <div className="mt-8 w-full bg-gray-500 uppercase text-white font-semi text-sm flex items-center text-center py-2 rounded-md justify-center     ">
        {" "}
        đăng nhập với google
      </div>
      <div className="mt-8 w-full bg-gray-500 uppercase text-white font-semi text-sm flex items-center text-center py-2 rounded-md justify-center     ">
        {" "}
        đăng nhập với facebook
      </div>
    </div>
  );
};

export default Login;
