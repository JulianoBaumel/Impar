import lupa from "../../assets/lupa.svg";

function Search() {

  return (
    <div className="
        flex 
        justify-center 
        bg-cover 
        bg-busca">
      <div className="
          w-2/3
          mt-36
          mb-10
          relative
          min-w-fit">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 right-0 flex items-center pl-2">
            <img src={lupa} className="my-3 mr-6"/>
          </span>
          <input placeholder="Digite aqui sua busca..." type="text" name="search" className="
            pl-7
            pr-20
            py-5
            w-full
            rounded-lg
            text-24
            font-muli
            font-light
            antialiased
            leading-7
            text-2xl
          placeholder:text-primaria-text
          placeholder:hover:text-secundaria-text
            hover:cursor-pointer
            outline-none"/>
        </label>
      </div>
    </div>
  );
}

export default Search;