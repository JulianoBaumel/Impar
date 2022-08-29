import { Component } from "react";
import SearchDrop from "./SearchDrop"
import lupa from "../../assets/lupa.svg";

class Search extends Component{

  render(){
    return (
      <label className="
        relative
        hover:cursor-pointer">
        <span className="sr-only">Search</span>
        <span className="
          absolute 
          inset-y-0 
          right-0 
          -mt-6">
          <img src={lupa} className="my-3 mr-6"/>
        </span>
        <input placeholder="Digite aqui sua busca..." type="search" name="search" className="
          form-input
          w-full 
          rounded-lg
          border-none
          py-5
          pl-7 pr-20 
          text-24
          font-muli font-light
          placeholder:text-primaria-text
          placeholder:hover:text-secundaria-text
          focus:ring-transparent
          hover:cursor-pointer"/>
        <div className="
          absolute 
          pr-20 pl-2
          ">
          <SearchDrop />
        </div>
      </label>
    );
  }
}
export default Search;