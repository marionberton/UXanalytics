import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { Navbar } from '../navbar';

describe('<Navbar />', () => {
  it('renders the component', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(wrapper.render()).toMatchSnapshot();
  });
});
