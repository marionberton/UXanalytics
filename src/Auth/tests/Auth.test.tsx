import React from 'react';
import { mount } from 'enzyme';

import { Auth } from '../Auth';

describe('<Auth/>', () => {
  it('renders the component', () => {
    const component = mount(<Auth />);

    expect(component.render()).toMatchSnapshot();
  });
});
