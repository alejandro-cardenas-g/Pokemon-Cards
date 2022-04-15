import { render, fireEvent } from "@testing-library/react";
import {HomeForm} from "../../../components/Home";


describe('Test on <HomeForm/>', () => {

    const mockHandlersetSearchInput = jest.fn();
    const mockHandlersetQuery = jest.fn();
    

    test('Renders the component', () => {

        const component = render( < HomeForm searchInput={'pikachu'} setSearchInput={() => {}} setQuery={() => {}} />);
    
        component.getByDisplayValue('pikachu');
    
    });

    test('Call the fuction setQuery at submit the form', () => {

        const component = render( < HomeForm searchInput={'pikachu'} setSearchInput={mockHandlersetSearchInput} setQuery={mockHandlersetQuery} />);
        
        const Submitbutton = component.getByText('Search');

        fireEvent.click(Submitbutton);

        expect(mockHandlersetQuery).toHaveBeenCalledTimes(1);

    });

    test('Call the function setQuery and setSearchInput at clicking reset button', () => {

        const component = render( < HomeForm searchInput={'pikachu'} setSearchInput={mockHandlersetSearchInput} setQuery={mockHandlersetQuery} />);
        
        const Resetbutton = component.getByText('Reset Search');

        fireEvent.click(Resetbutton);

        expect(mockHandlersetQuery).toHaveBeenCalledTimes(1);
        expect(mockHandlersetSearchInput).toHaveBeenCalledTimes(1);

    });

});
