import ListaItem from "./ListaItem";

function Lista() {
  return (
    <div className="container mx-auto my-4 flex flex-col gap-4">
      <ListaItem nombre={"Angeka"} capacidad={[50, 30, 40]}/>
      <ListaItem nombre={"Angeka"} capacidad={[50, 30, 40]}/>
      <ListaItem nombre={"Angeka"} capacidad={[50, 30, 40]}/>
      <ListaItem nombre={"Angeka"} capacidad={[50, 30, 40]}/>
      <ListaItem nombre={"Angeka"} capacidad={[50, 30, 40]}/>
    </div>
  );
}

export default Lista;
