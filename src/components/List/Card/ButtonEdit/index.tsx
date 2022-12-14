import edit from "../../../../assets/Icon-edit.svg"

export default function ButtonEdit(props: any){
  return(
    <div className="
      basis-1/2 
      flex 
      items-center 
      justify-center">
      <div>
        <img src={edit} alt="" className="h-4 w-4 min-w-min mx-3"/>
      </div>
      <div>
        <label onClick={() => {props.onClickHandler(true);}} 
          className="
          mr-3
        hover:text-destaque 
          hover:cursor-pointer">
          Editar
        </label>
      </div>
    </div>
  )
}