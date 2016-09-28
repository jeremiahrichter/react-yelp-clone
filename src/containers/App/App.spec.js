import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', function () {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />)
    });

    it('has a single wrapper element', () => {
        expect(wrapper.find(`.wrapper`))
            .to.have.length(1);
    });

    it('has a Router component', () => {
        expect(wrapper.find('Router'))
            .to.have.length(1);
    });
});