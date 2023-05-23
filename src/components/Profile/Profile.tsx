import React from "react";
import { useDispatch } from "react-redux";

// interface Prop {
//   setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
// }
import { AppDispatch } from "../../redux/store";
import { logOut } from "../../redux/slice/authSlice";

const Profile: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="text-[16px] font-semi text-gray-300 p-2">
      <div className="font-bold text-sm  uppercase border-b border-red-500">
        thông tin
      </div>
      <div className="flex flex-col gap-2 mt-2 border-b border-gray-300 pb-2">
        <div>Trang cá nhân</div>
        <div>Sửa thông tin</div>
        <div> Đổi mật khẩu</div>
      </div>

      <div className="flex flex-col gap-2 mt-2 border-b border-gray-300 pb-2">
        <div>Phim đã thích</div>
        <div>Sửa thông tin</div>
        <div> Đổi mật khẩu</div>
      </div>

      <div className="flex flex-col gap-2 mt-2 cursor-pointer ">
        <div
          onClick={() => {
            dispatch(logOut());
          }}
        >
          {" "}
          Đăng xuất
        </div>
      </div>
    </div>
  );
};

export default Profile;
