import { useState } from "react";
import lupa from "../../assets/lupa.svg";

export default function Search(props: { setPokemons: any; pokemons: any; }){

  const pokemons = Array.from(props.pokemons)
  
  const [filter, setFilter] = useState('');
  const [oldData, setOldData] = useState(pokemons);

  function searchPokemon() {
    if(filter == ''){

      props.setPokemons(oldData);
      
    }
    else{
      setOldData(pokemons);

      let data = pokemons;
      let fill = data.filter(pokemon => pokemon.name == filter.toLowerCase());

      if(fill.length > 0){
        props.setPokemons(fill);
      }
      else{
        props.setPokemons(oldData);
      }

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
        -mt-6">
        <img src={lupa} className="my-3 mr-6" onClick={() => searchPokemon()}/>
      </span>
      <input placeholder="Digite aqui sua busca..." type="text" name="search" value={filter} onChange={(p) => setFilter(p.target.value)}
        className="
        form-input
        w-full 
        rounded-lg
        border-none
        py-5
        pl-7 pr-20 
        text-24
        font-muli font-light
        placeholder:text-primaria-text
        placeholder:hover:text-secundaria-text
        focus:ring-transparent
        hover:cursor-pointer"/>
    </label>
  );
}