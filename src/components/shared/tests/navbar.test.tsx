import React from 'react';
import { mount } from 'enzyme';

import { Navbar } from '../navbar';

describe('<Navbar />', () => {
  it('renders the component', () => {
    const component = mount(<Navbar />);

    expect(component.render()).toMatchSnapshot();
  });
});
