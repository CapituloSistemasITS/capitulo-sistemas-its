"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Event } from "../utils/interfaces";

function NewEvents() {
  const [events, setEvents] = React.useState([]);
  const [eventSize , setEventSize] = React.useState(0);
  useEffect(() => {
    axios.get("/assets/json/events.json").then((res) => {
      setEvents(res.data.futureEvents);
      setEventSize(res.data.futureEvents.length);
    });
  }, []);

  var settings = {
    dots: true,
    infinite: eventSize > 1 ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    className: "center",
  };
  return (
    
    <Slider {...settings} className="w-full flex justify-center items-center bg-blue-900 rounded-2xl p-6 shadow-lg shadow-black">
        {events.map((event:Event, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-white text-center"
          >
            <h1 className="md:text-2xl font-semibold text-white">{event.title}</h1>
            <p className="md:text-lg text-white">{event.date}</p>
            <Image src={event.image} width={300} height={300} className="mx-auto rounded-lg mb-5" alt='event-pic' />
            <p className="md:text-lg text-white">{event.description}</p>
          </div>
        ))}
    </Slider>
  );
}

export default NewEvents;
