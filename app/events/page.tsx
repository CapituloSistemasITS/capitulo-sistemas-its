import React from "react";
import NewEvents from "./newEvents";
import OldEvents from "./oldEvents";

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
        <h1 className="md:text-3xl text-xl font-semibold text-center">Nuestros eventos</h1>
        <p className="md:text-lg text-sm text-balance text-center">
          Como capitulo estudiantil nos hemos encargado de realizar diversos
          eventos para la comunidad!<br></br>
          Tales como: Concursos de programacion, talleres de desarrollo de
          software, conferencias y mucho mas!<br></br>
          Aqui podras encontrar informacion sobre los eventos que hemos
          realizado y los que estamos por realizar!
        </p>
      </div>
      <div className="w-full bg-red-500">
        <div className="max-w-screen-xl mx-auto p-12">
          <h1 className="md:text-2xl text-xl font-semibold text-center pb-5 text-white">
            Proximos eventos
          </h1>
          <NewEvents />
        </div>
      </div>
      <div className="w-full bg-red-700">
        <div className="max-w-screen-xl mx-auto p-12">
          <h1 className="md:text-2xl text-xl font-semibold text-center pb-5 text-white">
            Eventos pasados
          </h1>
          <OldEvents />
        </div>
      </div>
    </main>
  );
}
