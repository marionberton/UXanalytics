import React from 'react';
import { mount } from 'enzyme';

import { Footer } from '../footer';

describe('<Footer />', () => {
  it('renders the component', () => {
    const component = mount(<Footer />);

    expect(component.render()).toMatchSnapshot();
  });
});
