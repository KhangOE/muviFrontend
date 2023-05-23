import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchbBar = () => {
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      input ? navigate("/search/" + input) : navigate("/movies");
    }
  };
  const submit = () => {
    input ? navigate("/search/" + input) : navigate("/movies");
  };
  return (
    <div className="border border-gray-500 rounded-lg sm:ml-10 w-full flex justify-between">
      <input
        onKeyDown={handleKeyDown}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="bg-[#1E293B] rounded-lg min-h-[25px] text-white focus:border-none focus:ring-cyan-500 flex-1 sm:min-w-[350px] p-2 "
        type="text"
      />
      <div
        onClick={submit}
        className="w-[15%]  flex justify-center items-center "
      >
        <span className=" text-4xl font-bold text-cyan-500 material-symbols-outlined">
          search
        </span>
      </div>
    </div>
  );
};

export default SearchbBar;
