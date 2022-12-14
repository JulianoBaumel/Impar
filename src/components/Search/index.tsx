import { useState } from "react";
import lupa from "../../assets/lupa.svg";

export default function Search(props: { setSearch: any; pokemons: any[]; }){

  //Clona o Array Pokemon
  const pokemons = Array.from(props.pokemons)
  
  //Recebe o que for escrito no campo de pesquisa.
  const [filter, setFilter] = useState('');

  //Pesquisa o Pokemon com base no que for escrito.
  function searchPokemon() {
    props.setSearch(pokemons.filter((pokemon) => filterName(pokemon.name)))
  }

  //Serve para filtrar com base no tamanho da string.
  function filterName(name: string){

    let index = filter.length;

    if(name.substring(index, 0) == filter.substring(index, 0).toLowerCase()){
      return name;
    }
    else{
      return null;
    }
  }

  return (
    <label className="
      relative
      hover:cursor-pointer">
      <span className="sr-only">Search</span>
      <span className="
      absolute 
      inset-y-0 
      right-0 
      -mt-6
      ">
        <img src={lupa} className="my-3 mr-6"/>
      </span>
      <input placeholder="Digite aqui sua busca..." type="text" name="search" value={filter}  onKeyUp={() => searchPokemon()} onChange={(p) => setFilter(p.target.value)}
      className="
      form-input
      w-full 
      rounded-lg
      border-none
      py-5
      pl-7 
      pr-20 
      text-24
      font-muli font-light
      placeholder:text-primaria-text
      placeholder:hover:text-secundaria-text
      focus:ring-transparent
      hover:cursor-pointer
      "/>
    </label>
  );
}