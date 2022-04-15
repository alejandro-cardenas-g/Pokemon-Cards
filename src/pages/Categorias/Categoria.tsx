import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { PokemonCard } from "../../components/pokemons";
import { PokemonNotFound } from "../../components/pokemons/PokemonNotFound";
import { ScrollButton, Spinner } from "../../components/utils";
import { capitalizeFirstLetter } from "../../helpers/capitalize";

export const Categoria = () => {

    const {id} = useParams();
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [typePok, setTypePok] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        setError(false);
        axios({
            method: "GET",
            url: `${process.env.REACT_APP_API_URL}type/${id}`
        }).then((res: AxiosResponse) => {
            setTypePok(capitalizeFirstLetter(res.data.name));

            res.data.pokemon.forEach(async(pokeunit:any) => {    
                const poke = await axios({method:'GET', url: pokeunit.pokemon.url});
                setPokemons((prev) => [...prev, poke.data]);
            });

            setLoading(false);
            setError(false);

        }).catch((error) => {
            setError(true);
            throw new Error(error);
        })
    }, [id]);

    const handleBack = () => {navigate('/types')};

    return (
        <div className="categoria">
        
            <div className="row categoria__content">
                <div>
                    <button onClick={handleBack} className="categoria__back"><i className="fa-solid fa-reply"></i></button>
                </div>
                {   (typePok) &&
                    <h2 className='categorias__heading'>Pokemons of type: {typePok}</h2>
                }
                { 
                    (error) 
                    ? 
                        <PokemonNotFound/>
                    :   

                        (!loading) ?

                            (pokemons.length > 0)
                            ?
                                pokemons.map((pokemon, index) => (
                                    <PokemonCard pokemon={pokemon} key={`${index}-${pokemon.name}`}/>
                                ))
                            :
                                <PokemonNotFound/>
                        
                        : null

                }

                <Spinner loading={loading}/>

            </div>
            
            {
                (pokemons.length > 0 && !loading) && <ScrollButton/>
            }

            
        </div>

    )
}
