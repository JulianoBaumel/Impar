const Input = (props: { onChange: any; value: string; }) => {

  //Recebe a informação do input.
  function handleChange(event: any) {
    props.onChange(event.target.value)
  }

  return(
    <div className="mb-12">
      <label className="uppercase">Digite um nome para o card
        <input type="text" placeholder="Digite o título..." value={props.value} onChange={handleChange} 
        className="
        mt-2
        w-full
        h-14
        px-6
        rounded-lg
        text-18
        font-normal
        border-sidebar-input-border
        text-primaria-text
        focus:ring-transparent
        focus:border-sidebar-input-border
        hover:cursor-pointer
        "/>
      </label>
    </div>
  );
}

export default Input;