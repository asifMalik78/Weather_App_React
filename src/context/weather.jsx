import axios from "axios";
import { createContext, useContext , useState , useEffect } from "react";

export const WeatherContext = createContext();
const key = "a94cf7500449403898d122152230605";
export const WeatherContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search , setSearch] = useState("new delhi");
  const [isDegree , setIsDegree] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${search}&days=5&aqi=no&alerts=no`)
      setData(res.data);
    }

    fetchData();
  } , [search])
  return (
    <WeatherContext.Provider value={{ data , isDegree , setIsDegree , setData , setSearch }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  return useContext(WeatherContext);
}
