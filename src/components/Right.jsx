import React from "react";
import { useWeatherContext } from "../context/weather";

const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Right = () => {
  const { data, isDegree } = useWeatherContext();
  const forcast = data?.forecast?.forecastday?.slice(1);
 
  return (
    <div className="bg-[#100E1D] w-full">
        <h1 className="text-white text-2xl md:text-xl font-bold  my-8 md:my-0 md:mb-5 text-center md:text-left">
          Forcast
        </h1>
      <div className="grid grid-cols[1fr] md:grid-cols-[1fr_1fr_1fr_1fr] gap-3 md:gap-5">
        {forcast &&
          forcast?.map((curr, idx) => {
            return (
              <div
                className="bg-[#1e213a] p-3 rounded-lg flex flex-col justify-center items-center"
                key={idx}
              >
                <h1 className="text-white text-xl">
                  {idx === 0 ? "Tomorrow" : Days[new Date(curr.date).getDay()]}
                </h1>
                <figure className="h-[75px] w-[75px]">
                  <img
                    src={curr.day.condition.icon}
                    alt="icon-image"
                    className="h-full w-full"
                  />
                </figure>
                <h2 className="text-white my-2 font-semibold">
                  {curr.day.condition.text}
                </h2>
                <div className="flex w-full justify-between items-center">
                  <div className="text-white text-xl">
                    {isDegree ? curr?.day?.maxtemp_c : curr?.day?.maxtemp_f}{" "}
                    <sup className="text-[0.8rem]">
                      &deg;{isDegree ? "C" : "F"}
                    </sup>
                  </div>
                  <div className="text-[#fcfcfc8e] text-xl">
                    {isDegree ? curr?.day?.mintemp_c : curr?.day?.mintemp_f}
                    <sup className="text-[0.8rem]">
                      &deg;{isDegree ? "C" : "F"}
                    </sup>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <div className="w-full">
        <h1 className="text-white text-2xl md:text-xl font-bold  my-8 md:mb-5 text-center md:text-left">
          Today's Highlights
        </h1>
        <div className="grid grid-rows-2 gap-5 md:gap-10">
          <div className="grid  grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-5 md:gap-24">
            <div className="bg-[#1e213a] p-2 rounded-lg drop-shadow-lg flex flex-col justify-center items-center">
              <p className="text-xl text-white">Wind Status</p>
              <h1 className="text-[#fcfcfc8e] text-lg">
                {data?.current?.wind_kph} mph
              </h1>
            </div>

            <div className="bg-[#1e213a] p-2 rounded-lg drop-shadow-lg flex flex-col justify-center items-center">
              <p className="text-xl text-white">Humidity</p>
              <h1 className="text-[#fcfcfc8e] text-lg">
                {data?.current?.humidity}%
              </h1>
            </div>
          </div>

          <div className="grid  grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-5 md:gap-24">
            <div className="bg-[#1e213a] p-2 rounded-lg drop-shadow-lg flex flex-col justify-center items-center">
              <p className="text-xl text-white">Visibility</p>
              <h1 className="text-[#fcfcfc8e] text-lg">
                {data?.current?.vis_km} km
              </h1>
            </div>

            <div className="bg-[#1e213a] p-2 rounded-lg drop-shadow-lg flex flex-col justify-center items-center">
              <p className="text-xl text-white">Air Pressure</p>
              <h1 className="text-[#fcfcfc8e] text-lg">
                {data?.current?.pressure_mb} mb
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
