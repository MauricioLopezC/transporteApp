import Navbar from "./components/Navbar";
import Lista from "./components/Lista";
import { Modal } from "./components/Modal";
import { useState } from "react";
import { ModalNuevaBarca } from "./pages/NuevaBarcaModal";
import { ModalResultados } from "./pages/ResultadosModal";

function App() {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenNuevo, setIsOpenNuevo] = useState(false);
  let [isOpenResultados, setIsOpenResultados] = useState(false);

  return (
    <>
      <Navbar />
      <div className="mx-2">
        <Lista />
        <div className="flex flex-col gap-3">
          <button
            className="bg-blue-500 px-2 py-2 rounded-md w-full hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
            onClick={() => {
              setIsOpenNuevo(true);
            }}
          >
            Agreagar Nueva Barcaza
          </button>
          <button
            className="bg-blue-500 px-2 py-2 rounded-md w-full hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
            onClick={() => {
              setIsOpenResultados(true);
            }}
          >
            Calcular Viajes
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <ModalNuevaBarca isOpen={isOpenNuevo} setIsOpen={setIsOpenNuevo} />
      <ModalResultados
        isOpen={isOpenResultados}
        setIsOpen={setIsOpenResultados}
      />
    </>
  );
}

export default App;
