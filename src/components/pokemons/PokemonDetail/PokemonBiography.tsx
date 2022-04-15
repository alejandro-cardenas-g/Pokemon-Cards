import { capitalizeFirstLetter } from "../../../helpers/capitalize";

export const PokemonBiography = ({pokemon, species}:IPokemonBiography) => {

    return (
        <div className="pokemon__item pokemon-biography">
            <h3>Information</h3>
            <div className="pokemon-biography__content">
                <div>
                    <p className="pokemon-biography__item-info">Height: <span>{ (pokemon?.height) ? (pokemon.height) : 'Unknown' } points</span></p>
                    <p className="pokemon-biography__item-info">Weight: <span>{ (pokemon.weight) ? pokemon.weight : 'Unknown'} points</span></p>
                    <p className="pokemon-biography__item-info">Habitat: <span>{ (species.habitat?.name) ? capitalizeFirstLetter(species.habitat.name) : 'Unknown'}</span></p>
                    <p className="pokemon-biography__item-info">Base XP: <span>{ (pokemon?.base_experience) ? pokemon.base_experience : 'Unknown'} points</span></p>
                </div>
                <div>
                    <div className="pokemon-biography__list">
                        <p>Types:</p>
                        <div>
                            {
                                (pokemon?.types) ? 
                                    pokemon.types.map((type:any, index:number) => (
                                        <p key={index}><span>{capitalizeFirstLetter(type.type.name)}</span></p>
                                    ))
                                :
                                    <p><span>Unknown</span></p>
                            }
                        </div>
                    </div>
                    <div className="pokemon-biography__list">
                        <p>Abilities:</p>
                        <div>
                            {

                                (pokemon?.abilities) 
                                ?
                                    pokemon.abilities.map((ability:any, index:number) => (
                                        <p key={index}><span>{capitalizeFirstLetter(ability.ability.name)}</span></p>
                                    ))
                                :
                                    <p><span>Unknown</span></p>    
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

interface IPokemonBiography{
    pokemon: any;
    species: any;
}
