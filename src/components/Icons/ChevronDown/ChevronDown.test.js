import React from 'react';
import { shallow } from 'enzyme';
import ChevronDown from './ChevronDown';

describe('component - ChevronDown', () => {
  it('renders', () => {
    expect(shallow(<ChevronDown />)).toHaveLength(1);
  });
});
