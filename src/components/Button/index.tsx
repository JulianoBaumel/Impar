export default function Button(props: {text: any, answer: any}){

  return (
    <button type="button" onClick={() => {props.answer(true);}}
      className="
      h-20
      xs:h-10
      md:h-12 
      md:w-44 
      rounded-lg 
      bg-destaque 
      text-white
      text-18
      font-bold
      shadow-button">
      {props.text}
    </button>
  );

}
