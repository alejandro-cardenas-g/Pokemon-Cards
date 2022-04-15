import { render } from "@testing-library/react";
import { Spinner } from "../../../components/utils";

describe('Tests on <Spinner/>', () => {

    test('must render at loading in true', () => {

        const component = render( < Spinner loading = {true} />);

        const spinner = component.container.querySelector('.spinner');

        expect(spinner).toBeInTheDocument();

    });

    test('must render at loading in false', () => {

        const component = render( < Spinner loading = {false} />);

        const spinner = component.container.querySelector('.spinner');

        expect(spinner).not.toBeInTheDocument();
        
    });

});