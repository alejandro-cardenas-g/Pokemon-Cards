import { render, fireEvent } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import { TypesCard } from '../../../components/Categorias/TypesCard';


const mockNavigate = jest.fn();

jest.mock('react-router-dom', () =>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockNavigate
}));

describe('Test on <TypesCard/>', () => {

    test('Component must render', () => {
        const type = {
            url: 'https://pokeapi.co/api/v2/type/2/',
            name: 'Water'
        }
        const component = render(<MemoryRouter initialEntries={['/', '/types/:id', '/types']}><TypesCard type={type}/></MemoryRouter>);

        component.getByText(type.name);

    });
    
    test('Must navigate at clicking the card', () => {

        const type = {
            url: 'https://pokeapi.co/api/v2/type/2/',
            name: 'Water'
        }
        const component = render(<MemoryRouter initialEntries={['/', '/types/:id', '/types']}><TypesCard type={type}/></MemoryRouter>);

        const card = component.container.querySelector('.categorias__card');

        if (card !== null) {

            fireEvent.click(card);

            expect(mockNavigate).toHaveBeenCalledWith('/types/2');

        }

    });

});