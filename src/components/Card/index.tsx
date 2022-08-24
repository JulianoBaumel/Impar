import icone from "../../assets/icone.svg";
import edit from "../../assets/icon-edit.svg";
import trash from "../../assets/icon-trash.svg";

function Card() {

  return (
    <div className="
      min-w-min
      flex
      flex-col
      justify-evenly
      items-center
      rounded-lg
      border
    border-card-border
      shadow-card-shadow
      ">
      <div className="
        mt-7
        mb-5
        w-fit
        h-fit
        rounded-full
        bg-card-elipse
        border
        border-card-border
        ">
        <img src={icone} alt="" className="m-4"/>
      </div>
      <div className="pt-2.5 mx-7 mb-7 border-t border-card-line-x">
        <p className="
          text-base
          leading-5
          text-center
          text-secundaria-text
          overflow-x-auto">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <div className="
        w-full
        flex
        flex-row
        shadow-card-shadow-inner
        py-3
        divide-x
        border-card-line-y
        text-15
        text-secundaria-text">
        <div className="
          basis-1/2 
          flex 
          items-center 
          justify-center">
          <div>
            <img src={trash} alt="" className="h-4 w-4 min-w-min mx-3"/>
          </div>
          <div className="">
              <label className="
                mr-2
              hover:text-erro 
                hover:cursor-pointer">
                Excluir
              </label>
          </div>
        </div>
        <div className="
          basis-1/2 
          flex 
          items-center 
          justify-center">
          <div className="">
            <img src={edit} alt="" className="h-4 w-4 min-w-min mx-3"/>
          </div>
          <div className="">
              <label className="
              mr-3
              hover:text-destaque 
              hover:cursor-pointer">
              Editar
              </label>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Card;