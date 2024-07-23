'use client';

import React, { useEffect } from "react";
import { Member } from "../utils/interfaces";
import Members from "../components/members";
import axios from "axios";

export default function About() {
  const [members, setMembers] = React.useState<Member[]>([]);
  const [directors, setDirectors] = React.useState<Member[]>([]);
  useEffect(() => {
    var data: any = null;
    axios.get("/assets/json/members.json").then((res) => {
      data = res.data;
      setMembers(data?.members);
      setDirectors(data?.directors);
    });
  },[]);
  return (
    <main className="w-full text-black">
      <div className="flex flex-col items-center justify-center p-12 max-w-screen-xl mx-auto text-center bg-white">
        <h1 className="md:text-4xl font-semibold pb-5 text-2xl">Sobre nosotros</h1>
        <p className="md:text-lg text-sm font-light text-balance">
          Somos un grupo de estudiantes que buscan lograr integrar a la
          comunidad estudiantil mediante eventos, concursos, talleres y
          proyectos que fomenten el aprendizaje y la colaboracion entre los
          estudiantes del Instituto Tecnologico de Saltilo.
        </p>
      </div>
      <div className="bg-red-100">
        <div className="max-w-screen-xl flex flex-row justify-center items-center space-x-12 mx-auto p-12">
          <div className="flex items-center justify-center w-1/4">
            <h1 className="md:text-2xl text-lg font-semibold">Mision</h1>
          </div>
          <div className="">
            <p className="md:text-lg font-light text-balance text-sm">
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
            <p className="md:text-lg font-light text-balance text-sm">
              Consolidarse como un espacio institucional en el que se potencia
              el desarrollo de los alumnos a través de experiencias académicas
              relacionadas con la ingeniería y sus diferentes especialidades.
            </p>
          </div>
          <div className="flex items-center justify-center w-1/4">
            <h1 className="md:text-2xl font-semibold text-xl">Vision</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-red-500">
        <div className="max-w-screen-xl mx-auto p-12 flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl font-semibold pb-5">Miembros</h1>
          <div className="flex flex-row justify-center items-center max-w-screen-xl flex-wrap">
            {members.map((member, i) => (
              <Members member={member} key={i} />
            ))}
          </div>
          <h1 className="text-2xl font-semibold pt-5 pb-5">Directivo</h1>
          <div className="flex flex-row justify-center items-center max-w-screen-xl flex-wrap">
            {directors.map((member, i) => (
              <Members member={member} key={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
