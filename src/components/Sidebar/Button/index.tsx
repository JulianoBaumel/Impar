export default function ButtonAdd(props: {name: string; image: string; pokemons: any; setPokemons: any; visibility: any}){


  function addPokemon() {
    //Clona o Array Pokemon
    const data = Array.from(props.pokemons);

    //Adiciona o item no Array Clonado
    data.push({name: props.name, src: props.image});
    
    //Define o Array Clonado como o novo Array Pokemon
    props.setPokemons(data);

    //Deixa a Sidebar invisivel.
    props.visibility(false);
  }

  return (
    <button type="button" onClick={addPokemon}
    className="
    h-12 
    w-44 
    rounded-lg 
    bg-destaque 
    text-white
    text-18
    font-bold
    shadow-button
    ">
      Criar card
    </button>
  );
  
}