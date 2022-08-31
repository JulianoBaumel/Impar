import Card from "./Card";

export default function List(props: { pokemons: any; setPokemons: any; }){

  const pokemons = props.pokemons;

  return (
    <div className="
    w-2/3
    grid 
    lg:grid-cols-2 
    xl:grid-cols-3 
    2xl:grid-cols-4 
    gap-9">
        {pokemons.map((pokemon: any) =>(
          <Card key={pokemon.name.toString()} pokemon={pokemon} pokemons={pokemons} setPokemons={props.setPokemons}/>
        ))}
    </div>
  );
}
