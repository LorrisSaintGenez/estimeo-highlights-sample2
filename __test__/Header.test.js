/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/Header';

describe('<Header />', () => {

    it('will be equal to Estimeo Highlights', () => {
       const wrapper = shallow(<Header/>);
       expect(wrapper.find('title').text()).toBe('Estimeo Highlights');
    });

    it('link exists', () => {
        const wrapper = shallow(<Header/>);
      expect(wrapper.contains(<link href="https://fonts.googleapis.com/css?family=Roboto"
                                                 rel="stylesheet" />));
      expect(wrapper.contains(<link rel="stylesheet" href="/static/css/estimeo-style.css"/>));
    });

    it('will be equal to Estimeo Highlights', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('style').length).toBe(1);
    });
});