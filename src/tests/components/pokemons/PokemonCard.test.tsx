import { render, fireEvent } from "@testing-library/react";
import { PokemonCard } from "../../../components/pokemons/PokemonCard";
import { UiContext } from '../../../context/UiContext';

describe('test on <PokemonCard/>', () => {

    const setPokemonActive = jest.fn();
    const openModal = jest.fn();
    const closeModal = jest.fn();

    test('Component must render', () => {

        const pokemon = {
            sprites: {
                other:{
                    dream_world:{
                        front_default: 'http://myurl.com'
                    }
                }
            },
            name: 'Pikachu',
            types: [
                {
                    type: {
                        name: 'Water'
                    }
                }
            ]
        };

        const context = {
            active: null,
            isOpen: false,
            setPokemonActive,
            openModal,
            closeModal
        };

        const component = render( <UiContext.Provider value={context}> < PokemonCard pokemon={pokemon} /> </UiContext.Provider> );
    
        component.getByText(pokemon.name);
        component.getByText(pokemon.types[0].type.name);

    });

    test('Pokemon must setActive', () => {

        const pokemon = {
            sprites: {
                other:{
                    dream_world:{
                        front_default: 'http://myurl.com'
                    }
                }
            },
            name: 'Pikachu',
            types: [
                {
                    type: {
                        name: 'Water'
                    }
                }
            ]
        };

        const context = {
            active: null,
            isOpen: false,
            setPokemonActive,
            openModal,
            closeModal
        };

        const component = render( <UiContext.Provider value={context}> < PokemonCard pokemon={pokemon} /> </UiContext.Provider> );
    
        const card = component.container.querySelector('.home__card');

        if(card !== null){

            fireEvent.click(card);

            expect(setPokemonActive).toHaveBeenCalledTimes(1);

        }

    });

});