import Card from "./Card";

export default function List(props){

  const pokemons = props.pokemons;

  return (
    <div className="
    w-2/3
    grid 
    lg:grid-cols-2 
    xl:grid-cols-3 
    2xl:grid-cols-4 
    gap-9">
        {pokemons.map((pokemon) =>(
          <Card key={pokemon.toString()} pokemon={pokemon} setVisibility={props.setVisibility}/>
        ))}
    </div>
  );
}
