import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { getUser, LoginApi } from "../../service/userService";
import { useSelector } from "react-redux";
import { addUser } from "../../redux/slice/authSlice";
import setAuthToken from "../../utils/setAuthToken";
import { RootState } from "../../redux/store";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const { currentUser } = useSelector((state: RootState) => state.auth);

  const initialValues: { userName: string; password: string } = {
    userName: "user123",
    password: "123456",
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (value: { userName: string; password: string }) => {
      setLoading(true);
      try {
        const res = await LoginApi(value);
        console.log(res.data);
        if (res.data) {
          localStorage.setItem("token", res.data);
          setAuthToken(res.data);
          // console.log(userInfo, 23);
          const userInfo = await getUser();
          dispatch(addUser(userInfo.data));
          toast.success(res.data.message);
        }
      } catch (err) {
        toast.error(err.response.data.message);
      }

      setLoading(false);
    },
    // validationSchema: Yup.object({
    //   userName: Yup.string()
    //     .required("Trường này là bắt buộc!")
    //     .matches(
    //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //       "userName  không đúng định dạng!"
    //     ),
    //   password: Yup.string()
    //     .max(10, "Mật khẩu không đc vượt quá 10 kí tự!")
    //     .required("Trường này là bắt buộc!")
    //     .min(6, "Mật khẩu có ít nhất 6 kí tự!"),
    // }),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-[500px] rounded-md p-4 max-w-[calc(100%-16px)]"
    >
      <h1 className="text-[20px] font-semibold">Đăng nhập</h1>
      <div className="w-full mt-4">
        <div className="w-full mb-4">
          <label className="block my-2 text-[16px]">Enter your userName </label>
          {/* <input
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            className="bg-[#333] text-white py-1 px-3 w-full text-[16px] outline-none rounded-sm"
          ></input> */}
          <input
            id="userName"
            placeholder="userName"
            className="bg-[#333] text-white py-1 px-3 w-full text-[16px] outline-none rounded-sm"
            value={formik.values.userName}
            name="userName"
            onChange={formik.handleChange}
          />
          {/* {formik.errors.userName && (
            <p className="text-xs text-red-500 mt-2">
              {formik.errors.userName}
            </p>
          )} */}
        </div>
        <div className="w-full mb-4">
          <label className="block my-2 text-[16px]">Enter your password</label>
          <div className="relative">
            <input
              placeholder="EX: 12345678"
              className="bg-[#333] text-white py-1 px-3 w-full text-[16px] outline-none rounded-sm"
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
                className={`${showPass ? "bx bx-hide" : "bx bx-show"} text-2xl`}
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
            Đăng nhập
          </button>
        </div>
      </div>
    </form>
  );
};
