import React from "react";
import { useWeatherContext } from "../context/weather";

const Left = () => {
  const { data , isDegree } = useWeatherContext();
  return (
    <div className="w-full h-fit flex flex-col gap-1 md:gap-2 items-center p-3 md:p-5 bg-[#1E213A] rounded-md drop-shadow-lg">
      <h1 className="text-white text-[1.5rem]">
        {new Date(data?.location?.localtime_epoch * 1000)
          .toDateString()
          .split(" ")
          .join(" , ")}
      </h1>
      <div className="flex flex-col gap-1 justify-center items-center">
        <div className="text-white font-normal text-[1.5rem]">
          {data?.location?.name}
        </div>
        <div className="text-white font-normal text-[1.2rem]">
          {data?.location?.country}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <figure className="h-[100px] w-[100px]">
          <img
            className="w-full h-full"
            src={data?.current?.condition?.icon}
            alt="icon-image"
          />
        </figure>

        <h1 className="text-white text-[2rem] font-extrabold">
          {isDegree ? data?.current?.temp_c : data?.current?.temp_f} <sup className="text-[1.4rem]">&deg;{isDegree ? "C" : "F"}</sup>
        </h1>
      </div>
      <div className="text-white text-[2rem] font-bold">
        {data?.current?.condition?.text}
      </div>

      <div className="flex justify-around items-center w-full mt-5">
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-[#f2f2f2] text-lg">Humidity</p>
          <h3 className="text-2xl text-white">{data?.current?.humidity} %</h3>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <p className="text-[#f2f2f2] text-lg">Wind Speed</p>
          <h3 className="text-2xl text-white">{data?.current?.wind_kph} kph</h3>
        </div>
      </div>

      <div className="text-gray-400 mt-4">
        Last Updated : {data?.current?.last_updated}
      </div>
    </div>
  );
};

export default Left;
