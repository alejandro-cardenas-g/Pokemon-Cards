import { capitalizeFirstLetter } from "../../../helpers/capitalize";
import { setColor } from "../../../helpers/setColor";

export const PokemonEvolutions = ({evolutions}: IPokemonEvolutions) => {
    return (
        <div className="pokemon-evolutions pokemon__item">

            <h3>Evolutions</h3>

            <ul>
                {evolutions.map((poke: any, index: number) => (

                    <li className="pokemon-evolutions__container" key={index}>

                        <div className="card mb-3 pokemon-evolutions__card" style={{background: setColor(poke.types[0].type.name, '309deg')}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={setImg(poke)} className="img-fluid rounded-start pokemon-evolutions__image" alt={poke.name}/>
                                </div>
                                <div className="col-md-8">
                                <div className="card-body" style={{textAlign: 'center'}}>
                                    <p>Evolution Form {index + 1}</p>
                                    <h5 className="card-title">{capitalizeFirstLetter(poke.name)}</h5>
                                </div>
                                </div>
                            </div>
                        </div>
                    </li>

                ))}
            </ul>

        </div>
    )
}

interface IPokemonEvolutions{
    evolutions: any;
}

const setImg = (pokemon: any) => {
    const imagen = pokemon.sprites.other.dream_world.front_default  || pokemon.sprites.other.home.front_default || pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
    return imagen;
}