import { render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import { Main } from '../../Layout/Main';

describe('Test on <Main/>', () => {

    test('Component must render', () => {

        const component = render(
            <MemoryRouter initialEntries={['/', '/types/:id', '/types']}>
                <Main>

                    <h1>RENDER</h1>

                </Main>
            </MemoryRouter>

        );

        component.getByText('Pokémon');
        
        component.getByText('RENDER');
            
    });

});