import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export function ModalResultados({ isOpen, setIsOpen, res, barcazas }) {
  const barcazasSelect = barcazas.filter((item) => {
    if (item.disponible) {
      return item;
    }
  });

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Resultados</DialogTitle>
            <Description>Cantidad Optima de Viajes</Description>

            <div>
              {barcazasSelect.map((barcaza) => (
                <p key={barcaza.id}>
                  Barcaza {barcaza.nombre}: {res[barcaza.id]} Viajes
                </p>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                className="py-2 px-6 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Salir
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
