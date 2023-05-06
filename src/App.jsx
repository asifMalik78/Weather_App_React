import { useEffect, useState } from "react";
import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";
import { useWeatherContext } from "./context/weather";

function App() {
  const { isDegree, setIsDegree } = useWeatherContext();
  return (
    <div className="pb-3 md:pb-0">
      <Header />
      <div className="flex gap-3  justify-center md:justify-end max-w-[1240px] md:mx-auto my-4 md:my-6">
        <div
          onClick={() => setIsDegree(!isDegree)}
          className={
            isDegree
              ? "bg-[#f2f2f2] rounded-[50%] h-[2.2rem] w-[2.2rem] flex items-center justify-center text-black cursor-pointer"
              : "bg-[#585676] rounded-[50%] h-[2.2rem] w-[2.2rem] flex items-center justify-center text-white cursor-pointer"
          }
        >
          &deg;C
        </div>
        <div
          onClick={() => setIsDegree(!isDegree)}
          className={
            isDegree
              ? "bg-[#585676] rounded-[50%] h-[2.2rem] w-[2.2rem] flex items-center justify-center text-white cursor-pointer"
              : "bg-[#f2f2f2] rounded-[50%] h-[2.2rem] w-[2.2rem] flex items-center justify-center text-black cursor-pointer"
          }
        >
          &deg;F
        </div>
      </div>
      <div className="max-w-[1240px]  mx-auto grid grid-cols-1 md:grid-cols-[0.6fr_1.4fr] gap-5 md:gap-28 px-3 md:px-0 py-2 md:py-4 place-items-start">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
