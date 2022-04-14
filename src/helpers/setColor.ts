import { pokemonTypes } from "../data/pokemon_types";

export const setColor = (type:string, degrees = '35deg', p1 = '20%'):string => {

    let linearGradient;
    const color = pokemonTypes.find(ptype => ptype.name.toString() === type)?.color || '#dec9c9';
    if(color){
        linearGradient = `linear-gradient(${degrees}, #ffffff ${p1}, ${color} 90%)`;
    }else{
        linearGradient = `linear-gradient(${degrees}, #ffffff ${p1}, #dec9c9 90%)`;
    }

    return linearGradient;
}