import { PokemonCard } from "../PokemonCard";
import { PokemonBiography } from "./PokemonBiography";
import { PokemonEvolutions } from "./PokemonEvolutions";

export const PokemonDetail = ({pokemon, species, evolutions}: IPokemonDetail) => {
    return (
        <div className='pokemon'>

            <PokemonCard pokemon={pokemon} className={'pokemon__item'} onShowing={true}/>

            <PokemonBiography pokemon={pokemon} species={species}/>

            <PokemonEvolutions evolutions={evolutions}/>

        </div>
    )
}

interface IPokemonDetail{
    pokemon: any;
    species:any,
    evolutions: any[],
}