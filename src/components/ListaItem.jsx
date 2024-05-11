import React from "react";
import SwitchBarcaza from "./Swich";

export default function ListaItem({ nombre, capacidad, id }) {
  return (
    <div className="flex justify-between p-2 rounded-md  shadow-lg">
      <div className="flex flex-col">
        <h1 className="font-bold">{nombre}</h1>
        <p className="">
          Capacidad A:{capacidad[0]}, B:{capacidad[1]}, C:{capacidad[2]}{" "}
        </p>
      </div>
      <SwitchBarcaza id={id}/>
    </div>
  );
}
