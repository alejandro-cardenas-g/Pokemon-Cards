import { render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import { Categoria } from '../../pages';

describe('Test on <Home/>', () => {

    test('Component must render', () => {

        const component = render(
            <MemoryRouter initialEntries={['/types/1']}>
                
                <Categoria/>

            </MemoryRouter>

        );

        expect(component).toMatchSnapshot();
            
    });

});