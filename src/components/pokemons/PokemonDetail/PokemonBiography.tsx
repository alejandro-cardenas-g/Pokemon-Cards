import { capitalizeFirstLetter } from "../../../helpers/capitalize";

export const PokemonBiography = ({pokemon, species}:IPokemonBiography) => {
    return (
        <div className="pokemon__item pokemon-biography">
            <h3>Information</h3>
            <div className="pokemon-biography__content">
                <div>
                    <p className="pokemon-biography__item-info">Height: <span>{pokemon.height} points</span></p>
                    <p className="pokemon-biography__item-info">Weight: <span>{pokemon.weight} points</span></p>
                    <p className="pokemon-biography__item-info">Habitat: <span>{capitalizeFirstLetter(species.habitat.name)}</span></p>
                    <p className="pokemon-biography__item-info">Base XP: <span>{pokemon.base_experience} points</span></p>
                </div>
                <div>
                    <div className="pokemon-biography__list">
                        <p>Types:</p>
                        <div>
                            {
                                pokemon.types.map((type:any, index:number) => (
                                    <p key={index}><span>{capitalizeFirstLetter(type.type.name)}</span></p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="pokemon-biography__list">
                        <p>Abilties:</p>
                        <div>
                            {
                                pokemon.abilities.map((ability:any, index:number) => (
                                    <p key={index}><span>{capitalizeFirstLetter(ability.ability.name)}</span></p>
                                ))
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
