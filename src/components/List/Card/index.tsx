import { useState } from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";
import ModalDel from "../../../components/ModalDelete";
import ModalInf from "../../../components/ModalInfo";
import PokemonImage from "../../../services/PokemonImage";

export default function Card(props: { pokemon: any; pokemons: any; setPokemons: any; }) {

  //Define a visibilidade das modal`s.
  const [visibilityMDel, setVisibilityMDel] = useState(false);
  const [visibilityMInf, setVisibilityMInf] = useState(false);

  const pokemon = props.pokemon;
  let source;
  let number;

  //Fiz essa parte para lidar com os pokemons que são adicionados
  if(typeof pokemon.url === "undefined"){

    //Caso seja um pokemon adicionado a imagem definida é carregada.
    source = pokemon.src;

  }
  else{
    //Regex para limpar as informações da URL deixando apenas o ID do pokemon.
    const regex = /\b\d+/g;

    //define o ID do pokemon.
    number = regex.exec(pokemon.url);

    //Usando o padrão da URL das imagens da API para pegar cada imagem sem precisar fazer uma requisição para a API para cada item.
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