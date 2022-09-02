export default function Button(props: {setVisibilitySidebar: any}){

  return (
    <button type="button" onClick={() => {props.setVisibilitySidebar(true);}}
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
      Novo Card
    </button>
  );

}
