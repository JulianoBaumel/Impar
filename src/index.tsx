import { useLayoutEffect, useState } from "react";
import api from "./services/api";
import Button from "./components/Button";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";

export default function Index(){

  const [visibilitySidebar, setVisibilitySidebar] = useState(false);

  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState([]);

  useLayoutEffect( () => {
    api
      .get("?limit=1000&offset=0")
      .then((response) => {
        setPokemons(response.data.results)
        setSearch(response.data.results)
      }).catch((error) => {
        console.error(error);
      });
  }, []);

  if (!pokemons) return null;

  return (
    <>
    {visibilitySidebar && <Sidebar pokemons={pokemons} setPokemons={setPokemons} visibility={setVisibilitySidebar} />}
    <Navbar />
    <div className="
    font-muli
    flex 
    justify-center 
    bg-cover 
    bg-busca
    ">
      <div className="
      w-2/3
      min-w-fit 
      mt-36 
      mb-10 
      relative 
      ">
        <Search pokemons={pokemons} setSearch={setSearch}/>
      </div>
    </div>
    <div className="
    flex 
    justify-center 
    flex-wrap
    ">
      <div className="
      w-2/3
      min-w-fit
      pt-8 
      pb-9
      flex 
      space-x-px 
      items-end 
      ">
        <div className="grow">
          <label className="
          text-primaria 
          text-32 
          select-none
          ">
            Resultado de busca
          </label>
        </div>
        <div className="flex-none">
          <Button text={"Novo Card"} answer={setVisibilitySidebar}/>
        </div>
      </div>
      <List pokemons={search} setPokemons={setPokemons}/>
    </div>
    </>
  );
  
}
