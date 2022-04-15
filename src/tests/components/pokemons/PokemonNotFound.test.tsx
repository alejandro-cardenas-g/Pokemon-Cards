import { render } from "@testing-library/react";
import { PokemonNotFound } from "../../../components/pokemons/PokemonNotFound";

describe('test on <PokemonNotFound/>', () => {

    test('Component must render', () => {

        const component = render( < PokemonNotFound /> );
    
        component.getByText('Pokemon Not Found');
        component.getByText('Unknown');

    });

});