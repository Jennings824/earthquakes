import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import EarthquakesHeader from 'components/EarthquakesHeader/EarthquakesHeader';
import EarthquakeRow from 'components/EarthquakeRow/EarthquakeRow';
import EarthquakeFilter from 'components/EarthquakeFilter/EarthquakeFilter';
import EarthquakeDetailsButton from 'components/EarthquakeDetailsButton/EarthquakeDetailsButton';


import 'components/Earthquakes/Earthquakes.css';

class Earthquakes extends PureComponent {
  render() {
    const { updateFilter } = this.props;

    return (
      <div className="Earthquakes">
        <EarthquakeFilter onInput={updateFilter} />
        {/* render all your earthquake rows here! */}
        <EarthquakeRow/>
      </div>
    );
  }
}

export default Earthquakes;

Earthquakes.propTypes = {
  earthquakes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      place: PropTypes.string,
      mag: PropTypes.num,
      time: PropTypes.string,
      long: PropTypes.num,
      lat: PropTypes.num,
    })
  ),

  updateFilter: PropTypes.func.isRequired,
};

Earthquakes.defaultProps = {
  earthquakes: [],
};
