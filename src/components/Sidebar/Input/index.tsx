
export default function Input(){

  return(
    <div className="">
    <label>Digite um nome para o card</label>
    <input placeholder="Digite o título" type="text"
        className="
        w-full 
        rounded-lg
        border-none
        pl-7 pr-20 py-5
        hover:cursor-pointer 
        text-24 leading-7 text-2xl
        font-muli font-light antialiased 
        placeholder:text-primaria-text
        placeholder:hover:text-secundaria-text
        focus:ring-transparent"/>
    </div>
  );
}