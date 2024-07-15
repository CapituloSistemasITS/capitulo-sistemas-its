import Image from "next/image";

export default function Home() {
  return (
    <main className="p-12 w-full flex flex-col mx-auto">
      <div className="text-black mx-auto max-w-screen-xl flex justify-center flex-col items-center text-center">
        <h1 className="text-3xl font-semibold text-center">Capitulo estudiantil de Sistemas computacionales</h1>
        <h1 className="text-2xl font-semibold text-center">2024-2025</h1>
        <h1 className='text-2xl font-semibold text-center'>Instituto Tecnologico de Saltillo</h1>
        <p className="text-lg font-light text-balance">
          Bienvenido a la pagina oficial del capitulo estudiantil de sistemas computacionales! Aqui podras encontrar informacion sobre nosotros, eventos, proyectos y mas.
        </p>
      </div>
    </main>
  );
}
