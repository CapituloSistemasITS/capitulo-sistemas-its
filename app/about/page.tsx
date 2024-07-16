import React from "react";
import { Member } from "../utils/interfaces";
import Members from "../components/members";

export default function About() {
  const members: Member[] = [
    {
      name: "Mauro Emmanuel Vazquez Alvarado",
      role: "Presidente",
      image: "/assets/imgs/placeholder.jpg",
    },
    {
      name: "Jose Juan Mares Davila",
      role: "Vicepresidente",
      image: "/assets/imgs/placeholder.jpg",
    },
    {
      name: "Leonardo Contreras Martinez",
      role: "Secretario primero",
      image: "/assets/imgs/placeholder.jpg",
    },
  ];
  return (
    <main className="w-full text-black">
      <div className="flex flex-col items-center justify-center p-12 max-w-screen-xl mx-auto text-center">
        <h1 className="text-4xl font-semibold pb-5">Sobre nosotros</h1>
        <p className="text-lg font-light text-balance">
          Somos un grupo de estudiantes que buscan lograr integrar a la
          comunidad estudiantil mediante eventos, concursos, talleres y
          proyectos que fomenten el aprendizaje y la colaboracion entre los
          estudiantes del Instituto Tecnologico de Saltilo.
        </p>
      </div>
      <div className="bg-red-100">
        <div className="max-w-screen-xl flex flex-row justify-center items-center space-x-12 mx-auto p-12">
          <div className="flex items-center justify-center w-1/4">
            <h1 className="text-2xl font-semibold">Mision</h1>
          </div>
          <div className="">
            <p className="text-lg font-light text-balance">
              Contribuir en el crecimiento académico, profesional y personal de
              los estudiantes de la Carrera de Ingeniería de Sistemas
              Computacionales de nuestro Instituto, para que colaboren en el
              desarrollo de su comunidad.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-red-200">
        <div className="max-w-screen-xl flex flex-row justify-center items-center space-x-12 mx-auto p-12">
          <div className="">
            <p className="text-lg font-light text-balance">
              Consolidarse como un espacio institucional en el que se potencia
              el desarrollo de los alumnos a través de experiencias académicas
              relacionadas con la ingeniería y sus diferentes especialidades.
            </p>
          </div>
          <div className="flex items-center justify-center w-1/4">
            <h1 className="text-2xl font-semibold">Vision</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-red-500">
        <div className="max-w-screen-xl mx-auto p-12 flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl font-semibold pb-5">Miembros</h1>
          <div className="flex flex-row justify-center items-center space-x-12">
            {members.map((member, i) => (
              <Members member={member} key={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
