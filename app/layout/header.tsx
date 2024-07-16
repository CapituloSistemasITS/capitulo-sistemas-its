import React from "react";
import Image from "next/image";
import Navbar from "./navbar";

function Header() {
  return (
    <div className="w-full bg-guinda-tec h-24 flex flex-row items-center justify-between">
      <div className="px-5 flex flex-row items-center">
        <Image
          src="/assets/imgs/cscblanco.png"
          width={80}
          height={80}
          alt="Logo"
          className="mx-2"
        />
        <p className="color-white font-semibold text-xl">
          Capitulo de sistemas computacionales
        </p>
      </div>
      <div className="">
        <Navbar />
      </div>
    </div>
  );
}

export default Header;
