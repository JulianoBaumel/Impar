import { useState } from "react";
import create from '../../../src/assets/icone_criar.svg'
import Button from '../Button';

export default function Sidebar(props: { pokemons: any[]; setPokemons: any; visibility: any; }){

  const [pokeName, setPokeName] = useState("");
  const [pokeImg, setPokeImg] = useState();

  function addPokemon() {
    const data = Array.from(props.pokemons);
    data.push({name: pokeName, src: pokeImg});
    props.setPokemons(data);
  }

  return(
    <div className="
    font-muli
    transition
    z-20
    fixed 
    inset-0
    flex
    justify-end
    bg-white bg-opacity-80">
        <div onClick={() => {props.visibility(false);}} className='grow'/>
        <div className="
          z-30
          h-full 
          sm:w-full
          md:w-5/6
          lg:w-3/6
          xl:w-5/12
          mb-1
          py-10 px-9 
          bg-white ">
            <div className="flex space-x-px items-end w-2/3 pt-8 pb-9 min-w-fit">
              <div className="flex-none w-12 h-12 mr-4">
                <img src={create} className="" alt=""></img>
              </div>
              <div className="grow">
                <label className="text-primaria font-bold text-32 leading-10 select-none">
                Criar card
                </label>
              </div>
            </div>
            <div>
              <span className="uppercase">Digite um nome para o card</span>
              <input placeholder="Digite o título..." type="text" onChange={() => {(p) => setPokeName(p.target.value)}}/>
            </div>
            <div>
              <span className="uppercase">inclua uma imagem para aparecer no card</span>
              <input type="file" onChange={() => {(p) => setPokeImg(p.target.value)}}/>
            </div>
            <div className="flex" onClick={() => {props.visibility(false);}}>
              <Button text={"Criar card"} answer={addPokemon}/>
            </div>
        </div>
    </div>
  );
}