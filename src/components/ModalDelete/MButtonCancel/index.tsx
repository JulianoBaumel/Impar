export default function ButtonCancel(props){

    return(

        <div className="basis-1/2 flex items-center justify-center">
            <button type="button" onClick={() => {props.visibility(false);}} 
                className="xl:w-40 lg:w-32 w-24 h-12 m-2 text-18 font-bold rounded-lg shadow-modal-button text-erro border border-erro">
                Cancelar
            </button>
        </div>
    );
}