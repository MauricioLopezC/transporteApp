import ListaItem from "./ListaItem";
import { useStoreTransporte } from "../store/barcazaStore";

function Lista() {
  let barcazas = useStoreTransporte((state) => state.barcazas);

  return (
    <div className="container mx-auto my-4 flex flex-col gap-4 max-w-md">
      <h1 className="font-bold">Barcazas</h1>
      {barcazas.map((barcaza) => (
        <ListaItem
          key={barcaza.id}
          nombre={barcaza.nombre}
          capacidad={barcaza.capacidad}
          id={barcaza.id}
        />
      ))}
    </div>
  );
}

export default Lista;
