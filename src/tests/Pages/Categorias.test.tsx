import { render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import { Categorias } from '../../pages';

describe('Test on <Home/>', () => {

    test('Component must render', () => {

        const component = render(
            <MemoryRouter initialEntries={['/', '/types/:id', '/types']}>
                
                <Categorias/>

            </MemoryRouter>

        );

        component.getByText('Choose a Pokemon Type');
            
    });

});