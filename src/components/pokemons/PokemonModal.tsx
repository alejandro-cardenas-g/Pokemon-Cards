import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Modal from 'react-modal';

import { useUI } from '../../hooks/useUI';
import { Spinner } from '../utils';
import {PokemonDetail} from './PokemonDetail/PokemonDetail';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: ''
    }
};

Modal.setAppElement('#root');

export const PokemonModal = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [species, setSpecies] = useState<any>({});
    const [pokemon, setPokemon] = useState<any>({});
    const [evolutions, setEvolutions] = useState<any[]>([]);

    const {active, setPokemonActive, isOpen, closeModal} = useUI();

    const getEvolutions = (objeto:any, almacen:any[]) => {
        if(objeto?.species){
            almacen.push(objeto.species.url);
            if(objeto?.evolves_to[0]?.species){
                almacen.push(objeto.evolves_to[0].species.url);
                if(objeto.evolves_to[0].evolves_to){
                    getEvolutions(objeto.evolves_to[0], almacen);
                }
            }
        }
    }

    useEffect(() => {

        setLoading(true);

        if(active != null){
            axios.get(`${process.env.REACT_APP_API_URL}pokemon/${active}`)
            .then((result: AxiosResponse) => {

                setPokemon(result.data);
                
                axios.get(`${process.env.REACT_APP_API_URL}pokemon-species/${active}`)
                .then(async(result: AxiosResponse) => {
                    setSpecies(result.data);
                    const evolutionChainUrl:string = result.data.evolution_chain.url;
                    const evolutionChain = await axios.get(`${evolutionChainUrl}`);
                    
                    let evolutionPokemons:any[] | Set<any>= [];
    
                    getEvolutions(evolutionChain.data.chain, evolutionPokemons);
                    
                    evolutionPokemons = new Set(evolutionPokemons);
    
                    const requests = Array.from(evolutionPokemons).map(url =>  axios.get(`${process.env.REACT_APP_API_URL}pokemon/${url.split('/')[6]}`));
                    
                    const evoluc = await Promise.all(requests);
                    
                    setEvolutions(evoluc.map(ev => ev.data));
    
                    setLoading(false);
    
                }).catch(error => {
                    setLoading(false);
                    closeModal();
                    setPokemonActive(null);
                })

            })
            .catch((error) => {
                setLoading(false);
                closeModal();
                setPokemonActive(null);
            })
        }else{
            setLoading(false);
            closeModal();
            setPokemonActive(null);
        }

    }, [active, closeModal, setPokemonActive]);  

    return (
        <Modal
            isOpen={isOpen}
            style={customStyles}
            className='modal'
            onRequestClose={() => {
                setPokemonActive(null);
                closeModal();
            }}
            closeTimeoutMS={200}
            overlayClassName='modal-fondo'
        >
            {
                (loading || evolutions.length === 0) ? <Spinner loading={loading}/>
                : <PokemonDetail pokemon={pokemon} species={species} evolutions={evolutions}/>
            }
        </Modal>
    )
}
