import ReactDOM from "react-dom";
import { StrictMode, useEffect, useLayoutEffect, useState } from "react";

import api from "./services/api";

import "./index.css";

import Button from "./components/Button";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";


export default function Main(){

  //Define a visibilidade da Sidebar.
  const [visibilitySidebar, setVisibilitySidebar] = useState(false);

  //Array que recebe todos* os pokemons da API.
  const [pokemons, setPokemons] = useState([]);

  //Array que é carregado no modulo "List".
  //Guarda o Array filtrado pelo modulo "Search"
  const [search, setSearch] = useState([]);
  
  //*Quantidade de pokemons que serão carregados pela API.
  const number = 1000;
  
  //Faz a requisição na API quando a pagina carrega.
  useLayoutEffect( () => {
    api
      .get(`?limit=${number}&offset=0`)
      .then((response) => {
        setPokemons(response.data.results)
      }).catch((error) => {
        console.error(error);
      });
  }, []);


  //Sempre que ocorrer uma mudança no Array Pokemon o Array Search é atualizado.
  useEffect( () => {
    setSearch(pokemons)
  }, [pokemons]);
  	
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
            <Button setVisibilitySidebar={setVisibilitySidebar}/>
          </div>
        </div>
        <List pokemons={search} setPokemons={setPokemons}/>
      </div>
    </>
  );
}

ReactDOM.render(
  <StrictMode>
    <Main />
  </StrictMode>,
  document.getElementById("root")
);
