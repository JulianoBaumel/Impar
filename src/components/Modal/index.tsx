import trash from "../../assets/icon-trash.svg";

export default function Modal(props){

    const pokemons = props.pokemons;

    function removerPokemon(nome: any){
        props.setPokemons(pokemons.filter((pokemon: { name: any; }) => pokemon.name !== nome));
    }

    const nome = "";

    return(
        <div className="
        z-50
        fixed 
        inset-0 
        flex
        justify-center
        items-center
        bg-white bg-opacity-80">
            <div className="
            min-w-min
            border
            bg-white 
            p-2 
            h-3/5
            w-1/3">
                <div className="relative flex flex-col justify-evenly items-center p-9 font-muli">
                    <div className="absolute -top-6 -right-6">
                        <div onClick={() => {props.visibility(false);}}  
                            className="w-9 h-9 p-2 bg-destaque rounded-full shadow-close-modal-x hover:cursor-pointer">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-2 stroke-white">
                                <path d="M4.5 19.5l15-15m-15 0l15 15" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-7 mb-5">
                        <div className="
                        p-9
                        w-40 h-40 
                        rounded-full 
                        border-8
                        bg-modal-elipse
                        border-modal-elipse-border">
                        <img src={trash} alt="Lixeira" className="w-full h-full"/>
                        </div>
                    </div>
                    
                    <p className="text-erro text-32 font-bold pb-3.5">Excluir</p>
                    <p className="text-texto text-12 font-semibold uppercase text-center">certeza que deseja excluir o pokemon: {pokemon.name}?</p>

                    <div className="flex flex-row mt-7 pt-5 border-t border-modal-elipse-border">
                        <div className="
                            basis-1/2 
                            flex 
                            items-center 
                            justify-center">
                            <button type="button" onClick={() => {props.visibility(false); removerPokemon(nome)}}
                                className="xl:w-40 lg:w-32 w-24 h-12 m-2 text-18 font-bold rounded-lg shadow-button text-white bg-erro">
                                Excluir
                            </button>
                        </div>
                        <div className="
                            basis-1/2 
                            flex 
                            items-center 
                            justify-center">
                            <button type="button" onClick={() => {props.visibility(false);}} 
                                className="xl:w-40 lg:w-32 w-24 h-12 m-2 text-18 font-bold rounded-lg shadow-modal-button text-erro border border-erro">
                                Cancelar
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}