import { useEffect, useState } from "react";
import api from "./services/api";
import Button from "./components/Button";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";

export default function Index(){

  const [visibilitySidebar, setVisibilitySidebar] = useState(false);

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api
      .get("?limit=1000&offset=0")
      .then((response) => setPokemons(response.data.results))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function updatePokemon({target}: any, index: number) {
    const data = Array.from(pokemons);
    data.splice(index, 1, { id: index, value: target.value });
    setPokemons(data);
  }

  if (!pokemons) return null;

  return (
    <>
    {visibilitySidebar && <Sidebar pokemons={pokemons} setPokemons={setPokemons} visibility={setVisibilitySidebar} />}
    <Navbar />
    <div className="flex justify-center bg-cover bg-busca">
      <div className="w-2/3 mt-36 mb-10 relative min-w-fit">
        <Search pokemons={pokemons} setPokemons={setPokemons}/>
      </div>
    </div>
    <div className="flex justify-center flex-wrap antialiased font-muli">
      <div className="flex space-x-px items-end w-2/3 pt-8 pb-9 min-w-fit">
        <div className="grow">
          <label className="text-primaria text-32 leading-10 select-none">
            Resultado de busca
          </label>
        </div>
        <div className="flex-none">
          <Button text={"Novo Card"} answer={setVisibilitySidebar}/>
        </div>
      </div>
      <List pokemons={pokemons} setPokemons={setPokemons}/>
    </div>
    </>
  );
  
}
