import { Key } from "react";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";

export default function Card(props) {

  const pokemon = props.pokemon;

  const regex = /\b\d+/g;
  const number = regex.exec(pokemon.url);

  const source = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`

  return (
    <div className="min-w-min flex flex-col justify-evenly items-center rounded-lg border border-card-border shadow-card-shadow
      ">
      <div className="mt-7 mb-5">
        <div className="p-4 w-24 h-24 rounded-full bg-card-elipse border border-card-border ">
          <img src={source}  alt={pokemon.name}/>
        </div>
      </div>
      <div className="w-9/12 pt-2.5 pb-7 border-t border-card-line-x">
        <p className="text-base leading-5 text-center text-secundaria-text verflow-y-auto uppercase">
          {pokemon.name}
        </p>
      </div>
      <div className="w-full flex flex-row shadow-card-shadow-inner p-3 divide-x border-card-line-y text-15 text-secundaria-text">
        <ButtonEdit />
        <ButtonDelete setVisibility={props.setVisibility}/>
      </div>
    </div>
  );
}