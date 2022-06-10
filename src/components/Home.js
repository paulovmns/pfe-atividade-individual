import React from "react";
import { Heading } from "./Heading";
import { RegistroList } from "./RegistroList";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
      <h2 className="text-center text-4xl mt-9 text-base leading-2 text-black font-bold uppercase">
        CURRICULUM VITAE
        </h2>
        <h3 className="bg-yellow-600 text-center text-3xl mt-20 text-base leading-8 text-white font-bold tracking-wide uppercase">
        FULANO BELTRANO DA SILVA
        </h3>
        <p className="font-medium text-center mt-8 text-2xl">
        26 Anos - Graças - Recife/PE
        </p>
        <Heading />
        <RegistroList />
      </div>
    </React.Fragment>
  );
};