export default function ButtonDelete(props: { visibility: any; onClickHandler: any;}){

    return(
        <div className="basis-1/2 flex items-center justify-center">
            <button type="button" onClick={() => {props.visibility(false); props.onClickHandler(true);}}
                className="xl:w-40 lg:w-32 w-24 h-12 m-2 text-18 font-bold rounded-lg shadow-button text-white bg-erro">
                Excluir
            </button>
        </div>
    );
}