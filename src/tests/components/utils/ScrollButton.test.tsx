import { render } from "@testing-library/react";
import { ScrollButton } from "../../../components/utils";

describe('Tests on <ScrollButton/>', () => {

    test('must render', () => {

        const component = render( < ScrollButton />);

        const button = component.container.querySelector('button');
    
        expect(button).toBeInTheDocument();

    });

});