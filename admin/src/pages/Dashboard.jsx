import React, { useEffect, useState } from "react";
import { getAdminInfo } from "../utils/getAdminInfo";
import { Card, Statistic } from "antd";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons";
import moment from "moment";

const DashboardPage = () => {
  const adminInfo = getAdminInfo();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      });

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    "https://media.gettyimages.com/id/1331637318/photo/portrait-of-young-afro-woman-with-bright-make-up.jpg?s=612x612&w=gi&k=20&c=t9NaVtyBNfIWDWgPZgmzdnFop9Oe_uYS4f9n8cCN0ak=",
    "https://cdn.britannica.com/35/222035-050-C68AD682/makeup-cosmetics.jpg",
  ];

  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        dynamicHeight={true}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-screen relative">
            <img
              src={image}
              alt="Slide"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>{" "}
      <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-between bg-gradient-to-b from-transparent to-black">
        <div className="flex justify-between">
          <Card className="bg-transparent border-0 text-white">
            <Statistic
              title="Current Time"
              value={time}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
          <Card className="bg-transparent border-0 text-white">
            <Statistic
              title="Today's Date"
              value={moment().format("MMMM Do YYYY")}
              prefix={<CalendarOutlined />}
            />
          </Card>
        </div>
        <div className="flex justify-between">
          {/* Your Admin and Weather Info */}
          <Card className="bg-transparent border-0 text-white">
            <h2 className="text-xl font-bold mb-2">Admin Information</h2>
            {adminInfo ? (
              <>
                <p>Username: {adminInfo.username}</p>
              </>
            ) : (
              <p>No admin information available.</p>
            )}
          </Card>
          <Card className="bg-transparent border-0 text-white">
            <h2 className="text-xl font-bold mb-2">Weather Information</h2>
            {weather ? (
              <>
                <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
                <p>Weather: {weather.weather[0].description}</p>
              </>
            ) : (
              <p>Loading weather information...</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
