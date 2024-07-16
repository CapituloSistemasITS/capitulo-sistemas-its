"use client";

import React, { useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Event } from "../utils/interfaces";

function Carousel() {
  const [events, setEvents] = React.useState([]);
  useEffect(() => {
    axios.get("/assets/json/events.json").then((res) => {
      setEvents(res.data.futureEvents);
    });
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "center",
  };
  return (
    <Slider {...settings} className="w-full flex justify-center items-center">
        {events.map((event:Event, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-black text-center"
          >
            <h1 className="text-2xl font-semibold text-black">{event.title}</h1>
            <p className="text-lg text-black">{event.description}</p>
          </div>
        ))}
    </Slider>
  );
}

export default Carousel;
