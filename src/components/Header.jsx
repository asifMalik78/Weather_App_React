import React , {useState} from "react";
import { useWeatherContext } from "../context/weather";

const Header = () => {
  const [input, setInput] = useState("");
  const {setSearch} = useWeatherContext();
  const clickHandler = async () => {
    setSearch(input);
    setInput("");
  }
  return (
    <div className="px-3  md:px-0 w-[full] flex justify-between items-center bg-[#1E213A]">
      <div className="w-[1240px] md:mx-auto flex justify-between items-center  py-3">
        <h1 className="text-white font-bold text-xl md:text-3xl">Weather App</h1>
        <div className="flex items-center w-[12rem] md:w-[20rem] border justify-between md:p-1 rounded-sm">
          <input
            type="text"
            placeholder="Search..."
            className="px-1 py-1 bg-[#1e213a] border-none w-[90%] focus:outline-none text-white"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={clickHandler}
            className="flex justify-center items-center px-2 py-1 bg-blue-700 text-white rounded-sm cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
