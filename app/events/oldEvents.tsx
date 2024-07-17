"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Event } from "../utils/interfaces";


function OldEvents() {
    const [events, setEvents] = React.useState([]);
    useEffect(() => {
      axios.get("/assets/json/events.json").then((res) => {
        setEvents(res.data.pastEvents);
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
      adaptiveHeight: true,
    };
  return (
    <Slider {...settings} className="w-full flex justify-center items-center bg-blue-950 rounded-2xl p-6 shadow-lg shadow-black">
    {events.map((event:Event, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center text-white text-center space-y-3 max-h-fit slider-container"
      >
        <h1 className="text-2xl font-semibold text-white">{event.title}</h1>
        <Image src={event.image} width={500} height={500} className="mx-auto w-auto rounded-2xl h-96" alt='event-pic' />
        <p className="text-lg text-white">{event.description}</p>
      </div>
    ))}
</Slider>
  )
}

export default OldEvents