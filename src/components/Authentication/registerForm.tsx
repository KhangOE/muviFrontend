import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getUser, registerUserApi } from "../../service/userService";
import { addUser } from "../../redux/slice/authSlice";
import setAuthToken from "../../utils/setAuthToken";
//import Loading from "../Loading/Loading";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RootState } from "../../redux/store";
import { registerType } from "../../Type";

export const RegisterForm = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      return navigate("/");
    }
  }, [currentUser]);
  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: async (value: registerType) => {
      console.log(value);
      //   setLoading(true);
      try {
        const res = await registerUserApi(value);
        console.log(res);
        if (res.data) {
          localStorage.setItem("token", res.data);
          setAuthToken(res.data);
          const userInfo = await getUser();
          console.log(userInfo, "userInfer");
          dispatch(addUser(userInfo.data));
          // toast.success(res.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
      //  setLoading(false);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Trường này là bắt buộc!")
        .min(6, "Tên phải có ít nhất 6 kí tự!")
        .max(20, "Tên không đc vượt quá 20 kí tự!"),
      email: Yup.string()
        .required("Trường này là bắt buộc!")
        .matches(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Email không đúng định dạng!"
        ),
      password: Yup.string()
        .max(10, "Mật khẩu không đc vượt quá 10 kí tự!")
        .required("Trường này là bắt buộc!")
        .min(6, "Mật khẩu có ít nhất 6 kí tự!"),
    }),
  });

  const dispatch = useDispatch();

  //   const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="w-full mih-h-full flex justify-center items-center pt-12">
      <form
        onSubmit={formik.handleSubmit}
        className="w-[500px]  rounded-md p-4 max-w-[calc(100%-16px)]  shadow-lg"
      >
        <h1 className="text-[20px] font-semibold">Đăng ký</h1>
        <div className="w-full mt-4">
          <div className="w-full mb-4">
            <label className="block my-2 text-[16px]">Enter your name</label>
            <input
              placeholder="Name"
              className=" bg-[#333]  -gray-300 py-1 px-3 w-full text-[16px] outline-none rounded-sm"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
            />
            {formik.errors.name && (
              <p className="text-xs text-red-500 mt-2">{formik.errors.name}</p>
            )}
          </div>
          <div className="w-full mb-4">
            <label className="block my-2 text-[16px]">
              Enter your User Name
            </label>
            <input
              placeholder="UserName"
              className=" bg-[#333]  -gray-300 py-1 px-3 w-full text-[16px] outline-none rounded-sm"
              value={formik.values.userName}
              name="userName"
              onChange={formik.handleChange}
            />
            {formik.errors.userName && (
              <p className="text-xs text-red-500 mt-2">
                {formik.errors.userName}
              </p>
            )}
          </div>
          <div className="w-full mb-4">
            <label className="block my-2 text-[16px]">Enter your email</label>
            <input
              placeholder="Email"
              className=" bg-[#333]  -gray-300 py-1 px-3 w-full text-[16px] outline-none rounded-sm"
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
            />
            {formik.errors.email && (
              <p className="text-xs text-red-500 mt-2">{formik.errors.email}</p>
            )}
          </div>
          <div className="w-full mb-4">
            <label className="block my-2 text-[16px]">
              Enter your password
            </label>
            <div className="relative">
              <input
                placeholder="Password"
                className="bg-[#333]  -gray-300 py-1 px-3 w-full text-[16px] outline-none rounded-sm"
                value={formik.values.password}
                name="password"
                onChange={formik.handleChange}
                type={showPass ? "text" : "password"}
              />
              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] right-0"
              >
                <i
                  className={`${
                    showPass ? "bx bx-hide" : "bx bx-show"
                  } text-2xl`}
                ></i>
              </div>
            </div>

            {formik.errors.password && (
              <p className="text-xs text-red-500 mt-2">
                {formik.errors.password}
              </p>
            )}
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="py-2 px-3 bg-red-500 text-white rounded-sm w-full"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
