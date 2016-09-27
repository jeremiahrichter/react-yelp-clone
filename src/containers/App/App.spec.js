import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import App from './App'
import styles from './styles.module.css'

describe('<App />', function () {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />)
    });

    it('has a single wrapper element', () => {
        console.log(wrapper.find(`.wrapper`).length);
        expect(wrapper.find(`.${styles.wrapper}`))
            .to.have.length(1);
    });
});