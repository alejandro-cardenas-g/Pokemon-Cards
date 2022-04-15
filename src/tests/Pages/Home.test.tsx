import { render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import { Home } from '../../pages/Home/Home';


describe('Test on <Home/>', () => {

    test('Component must render', () => {

        const component = render(
            <MemoryRouter initialEntries={['/', '/types/:id', '/types']}>
                
                <Home/>

            </MemoryRouter>

        );

        const home = component.container.querySelector('.home');

        if(home !== null) expect(home).toBeInTheDocument();
            
    });

});