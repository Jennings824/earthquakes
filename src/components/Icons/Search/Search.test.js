import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('component - Search', () => {
  it('renders', () => {
    expect(shallow(<Search />)).toHaveLength(1);
  });
});
