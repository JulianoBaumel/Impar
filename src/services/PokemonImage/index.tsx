export default function PokemonImage(props){

    let source;

    //alguns pokemons estão sem imagem, esta parte trata essa ausência.

    if(props.id == 899){
        source = "https://archives.bulbagarden.net/media/upload/7/75/899Wyrdeer.png";
    }
    else if(props.id == 900){
        source = 'https://archives.bulbagarden.net/media/upload/3/38/900Kleavor.png';
    }
    else if(props.id == 901){
        source = 'https://archives.bulbagarden.net/media/upload/0/02/901Ursaluna.png';
    }
    else if(props.id == 902){
        source = 'https://archives.bulbagarden.net/media/upload/6/60/902Basculegion-Male.png';
    }
    else if(props.id == 903){
        source = 'https://archives.bulbagarden.net/media/upload/5/5f/903Sneasler.png';
    }
    else if(props.id == 904){
        source = 'https://archives.bulbagarden.net/media/upload/2/26/904Overqwil.png';
    }
    else if(props.id == 905){
        source = 'https://archives.bulbagarden.net/media/upload/b/bf/905Enamorus.png';
    }
    else{
        source = props.image;
    }

    return(<img src={source} alt={props.name} className="w-full h-full"/>);
}
