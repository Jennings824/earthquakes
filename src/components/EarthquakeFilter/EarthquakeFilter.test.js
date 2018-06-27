import React from 'react';
import { shallow } from 'enzyme';

import Search from 'components/Icons/Search/Search';
import EarthquakeFilter from './EarthquakeFilter';

describe('component - EarthquakeFilter', () => {
  it('calls handleInput on an input event with the correct value', () => {
    const mock = jest.fn();
    const comp = shallow(<EarthquakeFilter onInput={mock} />);
    const input = comp.find('input');

    input.simulate('input', { target: { value: 'Alaska' } });

    expect(mock).toHaveBeenCalled();
  });

  it('Uses the Search SVG Icon', () => {
    const comp = shallow(<EarthquakeFilter />);
    const icon = comp.find(Search);

    expect(icon).toHaveLength(1);
  });
});
