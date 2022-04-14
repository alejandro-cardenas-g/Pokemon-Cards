import { capitalizeFirstLetter } from "../../helpers/capitalize";
import { setColor } from "../../helpers/setColor";
import { useUI } from "../../hooks/useUI";

const imagen_nopoke = require('./pokeball.png');

export const PokemonCard = ({pokemon, reference, className='', onShowing=false}:IPokemonCard) => {

    const imagen = pokemon.sprites.other.dream_world.front_default  || pokemon.sprites.other.home.front_default || pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default || imagen_nopoke;

    const {openModal, setPokemonActive} = useUI();

    const handleClick = () => {
        setPokemonActive(pokemon.id);
        openModal();
    }

    if(reference){
        return (

            <div className={`col-12 col-sm-6 col-lg-4 ${ !onShowing ? 'mb-4 animate__animated animate__zoomIn' : ''} ${className}`} ref={reference}>
                <div className={`card home__card ${(!onShowing) ? ' animate' : '' }`} style={{background: setColor(pokemon.types[0].type.name)}}
                    onClick={handleClick}
                >
                    <img src={imagen} className="card-img-top" alt={pokemon.name}/>
                    <div className="card-body">
                        <h3 className="card-title">{capitalizeFirstLetter(pokemon.name)}</h3>
                        <p className="card-name-info">Main Type:
                            <span style={{fontWeight: '700'}}> {capitalizeFirstLetter(pokemon.types[0].type.name)}</span>
                        </p>
                    </div>
                </div>
            </div>
            
        )
    }else{
        return (

            <div className={`col-12 col-sm-6 col-lg-4 ${ !onShowing ? 'mb-4 animate__animated animate__zoomIn' : ''} ${className}`}>
                <div className={`card home__card ${(!onShowing) ? ' animate' : '' }`} style={{background: setColor(pokemon.types[0].type.name)}}
                    onClick={handleClick}
                >
                    <img src={imagen} className="card-img-top" alt={pokemon.name}/>
                    <div className="card-body">
                        <h3 className="card-title">{capitalizeFirstLetter(pokemon.name)}</h3>
                        <p className="card-name-info">Main Type:
                            <span style={{fontWeight: '700'}}> {capitalizeFirstLetter(pokemon.types[0].type.name)}</span>
                        </p>
                    </div>
                </div>
            </div>
            
        )
    }

}

interface IPokemonCard{
    pokemon: any;
    reference?: any;
    className?: string;
    onShowing?: boolean;
};