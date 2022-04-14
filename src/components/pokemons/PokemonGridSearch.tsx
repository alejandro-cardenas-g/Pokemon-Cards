import { useState, useRef, useCallback, useEffect } from 'react';

import { Spinner } from "../../components/utils";
import { PokemonCard } from "./PokemonCard";

import { usePokemonSearch } from "../../hooks/usePokemon";
import { PokemonNotFound } from "./PokemonNotFound";

export const PokemonGridSearch = ({query}:IPokemonGrid) => {

    const [offset, setOffset] = useState(0);
    const {error,hasMore,loading,pokemons} = usePokemonSearch(query, offset);

    useEffect(() => {
        if(query !== ''){
            setOffset(0);
        }
    }, [query]);

    const observer = useRef<IntersectionObserver>();
    const lastPokemonCardRef = useCallback((node: HTMLDivElement | null) => {
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && hasMore){

                setOffset(prev => prev + 10);

            }
        }, {
            threshold: 1
        });
        if(node) observer.current.observe(node);
    },[loading, hasMore]);

    return (

        <div className="row home__content">

            { 
                (error) 
                ? 
                    <PokemonNotFound/>
                :
                    pokemons.map((pokemon, index) => {
                        if(pokemons.length === index + 1){
                            return <PokemonCard reference={lastPokemonCardRef} pokemon={pokemon} key={`${index}-${pokemon.name}`}/>
                        }else{
                            return <PokemonCard pokemon={pokemon} key={`${index}-${pokemon.name}`}/>
                        }
                    })

            }

            <Spinner loading={loading}/>

        </div>

    )
}

interface IPokemonGrid{
    query: string;
}
