import React from 'react';
import { shallow } from 'enzyme';
import ChevronUp from './ChevronUp';

describe('component - ChevronUp', () => {
  it('renders', () => {
    expect(shallow(<ChevronUp />)).toHaveLength(1);
  });
});
