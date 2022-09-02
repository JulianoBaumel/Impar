const InputFile = (props: { onChange: any; value: string;}) => {
    

    //Recebe a informação do input.
    function handleChange(event: any) {
        props.onChange(event.target.files[0].name)
    }

    return(
        <div className="w-full relative">
            <label className="uppercase">inclua uma imagem para aparecer no card
                <input disabled value={props.value} placeholder="Nenhum arquivo selecionado"
                className="
                mt-2
                w-full
                h-14
                py-3
                pl-6
                pr-56
                rounded-lg
                border
                text-18
                font-normal
                border-sidebar-input-border
                text-primaria-text
                hover:cursor-pointer
                "/>
            </label>
            <label className="
            absolute 
            right-0 
            h-10
            w-1/3
            min-w-max
            mx-2 
            mt-4
            px-7
            py-1
            text-center
            border 
            border-solid 
            border-destaque 
            rounded-lg 
            hover:cursor-pointer
            ">
                <span className="
                font-bold 
                font-muli 
                text-destaque 
                text-18
                ">
                    Escolher arquivo
                </span>
                <input type='file' className="hidden" onChange={handleChange} />
            </label>
        </div>
    );
}

export default InputFile;