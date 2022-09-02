import { useState } from "react";
import create from '../../../src/assets/icone_criar.svg'
import Button from './Button';
import InputFile from "./InputFile";
import Input from "./Input";

export default function Sidebar(props: { pokemons: any[]; setPokemons: any; visibility: any; }){

  //Guarda a Imagem e o Nome do Pokemon adicionado.
  const [pokeName, setPokeName] = useState('');
  const [pokeImg, setPokeImg] = useState('');

  return(
    <div className="
    font-muli
    transition
    z-20
    fixed 
    inset-0
    flex
    justify-end
    bg-white bg-opacity-80
    ">
      <div onClick={() => {props.visibility(false);}} className='grow'/>
      <div className="
      z-30
      h-full 
      md:w-5/6
      lg:w-3/6
      xl:w-5/12
      mb-1
      py-10 px-9 
      bg-white
      ">
        <div className="
        min-w-fit
        pt-8
        pb-7
        flex
        ">
          <div className="
          w-12 
          h-12 
          mr-4
          ">
            <img src={create} alt=""></img>
          </div>
          <div className="grow">
            <label className="
            text-primaria 
            font-bold 
            text-32 
            select-none
            ">
              Criar card
            </label>
          </div>
        </div>
        <form className="
        border-y
        py-12
        border-sidebar-border
        text-13
        font-bold
        text-texto
        ">
          <Input onChange={setPokeName} value={pokeName}/>
          <InputFile onChange={setPokeImg} value={pokeImg}/>
        </form>
        <div className="mt-7 flex justify-end">
          <Button name={pokeName} image={pokeImg} pokemons={props.pokemons} setPokemons={props.setPokemons} visibility={props.visibility}/>
        </div>
      </div>
    </div>
  );
}
