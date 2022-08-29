import create from '../../../src/assets/icone_criar.svg'
import Button from '../Button';

export default function Sidebar(props){

  function adicionarPokemon(nome: any, url: any){
    pokemons.push(
      {
        "name": nome,
        "url": url
      }
    )
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
            <div className="">
              <span className="uppercase">Digite um nome para o card</span>
              <input placeholder="Digite o título..." type="text" onChange={onChangeHandle}/>
            </div>
            <div className="">
              <span className="uppercase">inclua uma imagem para aparecer no card</span>
              <input type="file"/>
            </div>
            <div className="flex" onClick={() => {visibility(false);}}>
              <Button text={"Criar card"} answer={adicionarPokemon}/>
            </div>
        </div>
    </div>
  );
}

