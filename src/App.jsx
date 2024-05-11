import Navbar from "./components/Navbar";
import Lista from "./components/Lista";
import { useState } from "react";
import { ModalNuevaBarca } from "./pages/NuevaBarcaModal";
import { ModalResultados } from "./pages/ResultadosModal";
import Contenedores from "./pages/Contenedores";
import { useStoreTransporte } from "./store/barcazaStore";

const apiURL = process.env.APP_API;

function App() {
  let [isOpenNuevo, setIsOpenNuevo] = useState(false);
  let [isOpenResultados, setIsOpenResultados] = useState(false);

  const barcazas = useStoreTransporte((store) => store.barcazas);
  const cantidadContenedores = useStoreTransporte((store) => store.cantidadC);
  let matrizDatos;
  const [res, setRes] = useState([]);

  const traerResultados = async () => {
    console.log(matrizDatos);
    const res = await fetch(`${apiURL}/gauss_jordan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        matriz: matrizDatos, //importante que la key del json de llame "matriz"
      }),
    });
    const data = await res.json();
    setRes(data.respuesta);
  };

  const calcular = () => {
    let matriz = [];
    let i = 0;
    let fila = [];

    cantidadContenedores.forEach((capacidad) => {
      barcazas.forEach((barcaza) => {
        if (barcaza.disponible) {
          fila.push(barcaza.capacidad[i]);
        }
      });
      matriz.push([...fila, capacidad]);
      fila = [];
      i++;
    });
    return matriz;
  };

  return (
    <>
      <Navbar />
      <div className="mx-2">
        <Contenedores />
        <Lista />
        <div className="flex flex-col gap-3 justify-center items-center">
          <button
            className="max-w-md bg-blue-500 px-2 py-2 rounded-md w-full hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
            onClick={() => {
              setIsOpenNuevo(true);
            }}
          >
            Agreagar Nueva Barcaza
          </button>
          <button
            className="max-w-md bg-blue-500 px-2 py-2 rounded-md w-full hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
            onClick={() => {
              matrizDatos = calcular();
              traerResultados();
              setIsOpenResultados(true);
            }}
          >
            Calcular Viajes
          </button>
        </div>
      </div>
      <ModalNuevaBarca isOpen={isOpenNuevo} setIsOpen={setIsOpenNuevo} />
      <ModalResultados
        isOpen={isOpenResultados}
        setIsOpen={setIsOpenResultados}
        barcazas={barcazas}
        res={res}
      />
    </>
  );
}

export default App;
