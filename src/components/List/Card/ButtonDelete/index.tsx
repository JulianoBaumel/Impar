import trash from "../../../../assets/Icon-trash.svg"

export default function ButtonDelete(props) {
    <div  className="
        basis-1/2 
        flex 
        items-center 
        justify-center">
        <div>
            <img src={trash} alt="" className="h-4 w-4 min-w-min mx-3"/>
        </div>
        <div>
            <label onClick={() => {props.setVisibility(true);}} 
                className="
                mr-2
            hover:text-erro 
                hover:cursor-pointer">
                Excluir
            </label>
        </div>
    </div>
}