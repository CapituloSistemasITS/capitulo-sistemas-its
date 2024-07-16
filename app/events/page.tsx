import React from "react";
import Carousel from "./carousel";

export default function Events() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
  };
  return (
    <main className="w-full h-full flex flex-col items-center justify-center text-black">
      <div className="max-w-screen-xl p-12">
        <h1 className="text-3xl font-semibold text-center">Nuestros eventos</h1>
        <p className="text-lg text-balance text-center">
          Como capitulo estudiantil nos hemos encargado de realizar diversos
          eventos para la comunidad!<br></br>
          Tales como: Concursos de programacion, talleres de desarrollo de
          software, conferencias y mucho mas!<br></br>
          Aqui podras encontrar informacion sobre los eventos que hemos
          realizado y los que estamos por realizar!
        </p>
        <h1 className="text-2xl font-semibold text-center pt-5">
          Proximos eventos
        </h1>
      </div>
      <div className="w-full pb-10">
        <div className="max-w-screen-xl mx-auto">
            <Carousel />
        </div>
      </div>
    </main>
  );
}
