import bug from "../assets/elements/bug.svg";
import dark from "../assets/elements/dark.svg";
import dragon from "../assets/elements/dragon.svg";
import electric from "../assets/elements/electric.svg";
import fairy from "../assets/elements/fairy.svg";
import fighting from "../assets/elements/fighting.svg";
import fire from "../assets/elements/fire.svg";
import flying from "../assets/elements/flying.svg";
import ghost from "../assets/elements/ghost.svg";
import grass from "../assets/elements/grass.svg";
import ground from "../assets/elements/ground.svg";
import ice from "../assets/elements/ice.svg";
import normal from "../assets/elements/normal.svg";
import poison from "../assets/elements/poison.svg";
import psychic from "../assets/elements/psychic.svg";
import rock from "../assets/elements/rock.svg";
import steel from "../assets/elements/steel.svg";
import water from "../assets/elements/water.svg";

//Para cada tipo um icone é definido e retornado como uma imagem.

export default function Icons(props: { type: any; }){

    const type = props.type;

    let source;

    if (type == "bug"){
        source = bug;
    }
    else if(type == "dark"){
        source = dark;
    }
    else if(type == "dragon"){
        source = dragon;
    }
    else if(type == "electric"){
        source = electric;
    }
    else if(type == "fairy"){
        source = fairy;
    }
    else if(type == "fighting"){
        source = fighting;
    }

    else if(type == "fire"){
        source = fire;
    }

    else if(type == "flying"){
        source = flying;
    }

    else if(type == "ghost"){
        source = ghost;
    }

    else if(type == "grass"){
        source = grass;
    }

    else if(type == "ground"){
        source = ground;
    }

    else if(type == "ice"){
        source = ice;
    }

    else if(type == "normal"){
        source = normal;
    }

    else if(type == "poison"){
        source = poison;
    }

    else if(type == "psychic"){
        source = psychic;
    }

    else if(type == "rock"){
        source = rock;
    }

    else if(type == "steel"){
        source = steel;
    }

    else if(type == "water"){
        source = water;
    }

    else {
        source = '';
    }

    return (<img src={source} alt={type} className="w-full h-full"/>);

}