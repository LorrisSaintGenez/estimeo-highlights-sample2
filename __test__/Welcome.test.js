/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Welcome from '../components/Welcome';

describe('<Welcome />', () => {

    it('will have one tag h1', () => {
        const wrapper = shallow(<Welcome/>);
        expect(wrapper.find('h1').length).toBe(1);
    });

    it('will have one tag p', () => {
        const wrapper = shallow(<Welcome/>);
        expect(wrapper.find('p').length).toBe(1);
    });

    it('h1 inner text is Welcome !', () => {
        const wrapper = shallow(<Welcome title={"Welcome !"}/>);
        expect(wrapper.find('h1').text()).toBe("Welcome !");
    });

    it('p inner text is My Message', () => {
        const wrapper = shallow(<Welcome msg={"My Message"}/>);
        expect(wrapper.find('p').text()).toBe("My Message");
    });
});