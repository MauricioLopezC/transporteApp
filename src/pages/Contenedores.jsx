import { useStoreTransporte } from "../store/barcazaStore";
import { useState, useEffect } from "react";

const FormItem = ({
  placeholder,
  tipoContendor,
  cantidadCont,
  setCantidadCont,
}) => {
  const handdleChange = (e) => {
    let value = e.target.value;
    setCantidadCont(value);
  };

  return (
    <div className="flex items-center text-gray-400 border rounded-md">
      <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
        {tipoContendor}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        id="website-url"
        className="w-full p-2.5 ml-2 bg-transparent outline-none"
        value={cantidadCont}
        onChange={(e) => {
          handdleChange(e);
        }}
      />
    </div>
  );
};

function Contenedores() {
  const cantidadC = useStoreTransporte((store) => store.cantidadC);
  const updateCantidadC = useStoreTransporte((store) => store.updateCantidadC);

  const [cantidadCA, setCantidadA] = useState(cantidadC[0]);
  const [cantidadCB, setCantidadB] = useState(cantidadC[1]);
  const [cantidadCC, setCantidadC] = useState(cantidadC[2]);

  useEffect(() => {
    updateCantidadC([
      Number(cantidadCA),
      Number(cantidadCB),
      Number(cantidadCC),
    ]);
  }, [cantidadCA, cantidadCB, cantidadCC]);

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="font-bold">Contenedores a transportar</h1>
      <form
        action=""
        className="flex flex-col gap-2 items-center justify-center max-w-md mx-auto"
      >
        <FormItem
          placeholder={"Ingrese la cantidad"}
          tipoContendor={"A"}
          cantidadCont={cantidadCA}
          setCantidadCont={setCantidadA}
        />
        <FormItem
          placeholder={"Ingrese la cantidad"}
          tipoContendor={"B"}
          cantidadCont={cantidadCB}
          setCantidadCont={setCantidadB}
        />
        <FormItem
          placeholder={"Ingrese la cantidad"}
          tipoContendor={"C"}
          setCantidadCont={setCantidadC}
          cantidadCont={cantidadCC}
        />
      </form>
    </div>
  );
}

export default Contenedores;
