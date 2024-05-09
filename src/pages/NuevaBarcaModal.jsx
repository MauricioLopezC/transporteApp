import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const FormItem = ({ placeholder }) => (
  <div className="relative max-w-xs">
    <input
      type="text"
      placeholder={placeholder}
      className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-600 shadow-sm rounded-lg"
    />
  </div>
);

export function ModalNuevaBarca({ isOpen, setIsOpen }) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Nueva Barcaza</DialogTitle>

            <form className="flex flex-col gap-2">
              <FormItem placeholder={"Ingresa el nombre"} />
              <FormItem placeholder={"Ingresa Capacidad A"} />
              <FormItem placeholder={"Ingresa Capacidad B"} />
              <FormItem placeholder={"ingresa capacidad C"} />

              <div className="flex gap-4 justify-center">
                <button
                  className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  Agregar
                </button>
                <button
                  className="p-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  onClick={() => setIsOpen(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
