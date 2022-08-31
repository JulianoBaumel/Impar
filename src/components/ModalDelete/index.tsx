import trash from "../../assets/icon-trash.svg";
import ButtonCancel from "./MButtonCancel";
import ButtonDelete from "./MButtonDelete";

export default function ModalDelete(props: { pokemons: any; setPokemons: any; visibility: any; name: string; }){

    const pokemons = props.pokemons;
    
    let verify = pokemons.map((p: any) =>(p.name == props.name))

    let index = verify.indexOf(true)

    function deletePokemon() {
        const data = Array.from(pokemons);
        data.splice(index, 1);
        props.setPokemons(data);
    }

    return(
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-white bg-opacity-80">
            <div className="min-w-min border bg-white p-2 h-3/5 w-1/3">
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
                        <div className="p-9 w-40 h-40 rounded-full border-8 bg-modal-elipse border-modal-elipse-border">
                        <img src={trash} alt="Lixeira" className="w-full h-full"/>
                        </div>
                    </div>
                    
                    <p className="text-erro text-32 font-bold pb-3.5">Excluir</p>
                    <p className="text-texto text-12 font-semibold uppercase text-center">certeza que deseja excluir o pokemon: {props.name}?</p>

                    <div className="flex flex-row mt-7 pt-5 border-t border-modal-elipse-border">
                        <ButtonDelete visibility={props.visibility} onClickHandler={deletePokemon}/>
                        <ButtonCancel visibility={props.visibility}/>
                    </div>

                </div>
            </div>
        </div>
    );
}