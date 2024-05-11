import { create } from "zustand";
import { barcazasIniciales } from "./datosIniciales";

export const useStoreTransporte = create((set) => ({
  cantidadC: [4500, 4400, 5800],
  updateCantidadC: (nuevaCantidadC) => set({ cantidadC: nuevaCantidadC }),

  barcazas: barcazasIniciales,
  updateBarcazas: (nuevaBarcazas) => set({ barcazas: nuevaBarcazas }),
}));

