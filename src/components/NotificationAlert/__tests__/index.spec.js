/* eslint no-undef:0 */
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NotificationAlert from '../index';

// Setup Enzyme
Enzyme.configure({ adapter: new Adapter() });

describe('NotificationAlert Component', () => {

    test('render component correctly', () => {
        const props = {
            message: 'Esto es una notificación'
        };

        const SUT = Enzyme.shallow(
                <NotificationAlert {...props} />
        );

        expect(SUT).toMatchSnapshot();
    });

});
