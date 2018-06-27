import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import 'components/EarthquakeFilter/EarthquakeFilter.css';

/**
 * Simple Input component, didn't really need to be named EarthquakeFilter.
 */

export default class EarthquakeFilter extends PureComponent {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.props.onInput(event.target.value);
  }

  render() {
    return (
      <div className="EarthquakeFilter">
        <input
          className="EarthquakeFilter__input"
          placeholder="Search by Location"
        />
      </div>
    );
  }
}

EarthquakeFilter.propTypes = {
  onInput: PropTypes.func,
};

EarthquakeFilter.defaultProps = {
  onInput: () => {},
};
