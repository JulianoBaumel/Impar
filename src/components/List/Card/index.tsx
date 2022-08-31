import { useState } from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";
import ModalDel from "../../../components/ModalDelete";
import ModalInf from "../../../components/ModalInfo";
import PokemonImage from "../../../services/PokemonImage";

export default function Card(props: { pokemon: any; pokemons: any; setPokemons: any; }) {

  const [visibilityMDel, setVisibilityMDel] = useState(false);
  const [visibilityMInf, setVisibilityMInf] = useState(false);

  const pokemon = props.pokemon;

  let source;
  let number;

  if(typeof pokemon.url === "undefined"){

    source = pokemon.src;

  }
  else{
    const regex = /\b\d+/g;
    
    number = regex.exec(pokemon.url);

    source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
  }

  return (
    <div
      className="
        min-w-min 
        flex 
        flex-col 
        justify-evenly 
        items-center 
        rounded-lg 
        border 
        border-card-border 
        shadow-card-shadow">
      <div className="mt-7 mb-5">
        <div className="
            w-24 
            h-24 
            rounded-full 
            bg-card-elipse border 
            border-card-border ">
            <PokemonImage image={source} name={pokemon.name} id={number}/>   
        </div>
      </div>
      <div className="w-9/12 pt-2.5 pb-7 border-t border-card-line-x">
        <p className="text-base leading-5 text-center text-secundaria-text verflow-y-auto uppercase">
          {pokemon.name}
        </p>
      </div>
      <div className="w-full flex flex-row shadow-card-shadow-inner p-3 divide-x border-card-line-y text-15 text-secundaria-text">
        <ButtonEdit onClickHandler={setVisibilityMInf}/>
        <ButtonDelete onClickHandler={setVisibilityMDel}/>
      </div>
      {visibilityMDel && <ModalDel visibility={setVisibilityMDel} name={pokemon.name} pokemons={props.pokemons} setPokemons={props.setPokemons}/>}
      {visibilityMInf && <ModalInf visibility={setVisibilityMInf} name={pokemon.name}/>}
    </div>
  );
}