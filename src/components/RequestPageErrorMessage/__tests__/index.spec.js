
/* eslint no-undef: 0 */
import React from 'react';
// import renderer from 'react-test-renderer';

import RequestPageErrorMessage from '../index';

describe.skip('LoginErrorMessage Component', () => {

    test('Fail on ommit required message prop', () => {
        const spy = jest.spyOn(console, 'error');

        const SUT = renderer.create(
            <RequestPageErrorMessage />
        );

        expect(spy).toHaveBeenCalled();

        if (Array.isArray(spy.mock.calls) && spy.mock.calls.length > 0) {
            const consoleCall = spy.mock.calls[0][0];
            const propTypeRequired = consoleCall.split('.')[0];

            expect(propTypeRequired)
            .toBe('Warning: Failed prop type: The prop `message` is marked as required in `RequestLoginErrorMessage`, but its value is `undefined`');
        } else {
            throw Error('No está controlado si `message` es requerido!');
        }

        spy.mockReset();
        spy.mockRestore();
    });


    test('Render OK with message', () => {
        const props = {
            message: 'Mensaje de error para testing.'
        };

        const component = renderer.create(
            <RequestPageErrorMessage message={props.message} />
        );

        const SUT = component.toJSON();

        expect(SUT).toMatchSnapshot();
    });


    test('Render OK with onlyMessage enabled', () => {
        const props = {
            message: 'Mensaje de error para testing.'
        };

        const component = renderer.create(
        <RequestPageErrorMessage
          message={props.message}
          onlyMessage
        />
        );

        const SUT = component.toJSON();

        expect(SUT).toMatchSnapshot();
    });

});
