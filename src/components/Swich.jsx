import { Switch } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useStoreTransporte } from "../store/barcazaStore";

export default function SwitchBarcaza({id}) {
  const [enabled, setEnabled] = useState(false);
  const barcazas = useStoreTransporte((state) => state.barcazas) //array de objetos
  const updateBarcazas = useStoreTransporte((state) => state.updateBarcazas)
  // console.log("Barcazas del state --> ",barcazas)

  useEffect(() => {
    barcazas[id].disponible = enabled
    updateBarcazas(barcazas)
  },[enabled])

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-300 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-gray-800"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-gray-100 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
      />
    </Switch>
  );
}
