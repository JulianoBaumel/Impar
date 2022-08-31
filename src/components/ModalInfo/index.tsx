import { useEffect, useState } from "react";
import api from "../../services/api";
import Icons from "../../services/icons"
import PokemonImage from "../../services/PokemonImage";


export default function ModalInfo(props: { name: string; visibility: any; }){

    const [pokemon, setPokemon] = useState();

    console.log(props.name)

    useEffect(() => {
        api
          .get(`/${props.name}`)
          .then((response) => setPokemon(response.data))
          .catch((error) => {
            console.error(error);
          });
    }, []);

    if (!pokemon) return null;

    return(
        <div className="
        z-50
        fixed 
        inset-0 
        flex
        justify-center items-center
        bg-white bg-opacity-80">
            <div className="
            p-2 
            h-2/3 w-1/3
            min-w-min
            border
            bg-white 
            text-texto text-12 
            font-muli font-semibold uppercase">
                <div className="relative flex flex-col items-center">
                    <div className="absolute -top-6 -right-6">
                        <div onClick={() => {props.visibility(false);}}  
                            className="w-9 h-9 p-2 bg-destaque rounded-full shadow-close-modal-x hover:cursor-pointer">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-2 stroke-white">
                                <path d="M4.5 19.5l15-15m-15 0l15 15" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-7">
                        <div className="
                            w-40 h-40 
                            rounded-full 
                            border-8
                            bg-modal-elipse
                            border-modal-elipse-border">
                                
                            <PokemonImage image={pokemon.sprites.front_default} id={pokemon.id} name={pokemon.name}/>

                        </div>
                    </div>

                    <div className="flex mb-4">
                        {pokemon.types.map((data: any) =>(
                            <div className="h-6 m-2">
                                <Icons type={data.type.name}/>
                                <p className="mt-1 text-8">{data.type.name}</p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="w-2/3 grid grid-cols-2 gap-1 place-items-center">

                        <div className="col-span-2 border-card-line-x border-b mb-3 mt-1 text-13">Information</div>
                        
                        <div>Id:</div>
                        <div>{pokemon.id}</div>

                        <div>Nome:</div>
                        <div>{pokemon.name}</div>

                        <div>Altura:</div>
                        <div>{pokemon.height /10} m</div>

                        <div>Peso:</div>
                        <div>{pokemon.weight /10} kg</div>

                        <div className="col-span-2 border-card-line-x border-b mb-3 mt-1 text-13">Stats</div>
                        
                        {pokemon.stats.map((data: any) =>(
                            <>
                                <div>{data.stat.name}:</div><div>{data.base_stat}</div>
                            </>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );

}