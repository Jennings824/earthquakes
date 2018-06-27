import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import EarthquakeDetailsButton from 'components/EarthquakeDetailsButton/EarthquakeDetailsButton';
import EarthquakeData from 'data-containers/EarthquakeData/EarthquakeData';
import 'components/EarthquakeRow/EarthquakeRow.css';

/**
 * This component should render all of the columns needed
 * as well as the details button.
 *
 * PLEASE GIVE ANYTHING THAT HAS A VALUE IN IT THE CLASSNAME
 * EarthquakeRow__value
 */

 // I had to change this to s stateless component to get the data to display

const EarthquakeRow = (props) => {
    return (
      <div>
        {/* This should return the details, all the values, and the details button */}
        <h1 className="EarthquakeRow__value">ID</h1>
        {props.id}
        <h1 className="EarthquakeRow__value">Time</h1>
        {props.time}
        <h1 className="EarthquakeRow__value">Location</h1>
        {props.place}
        <h1 className="EarthquakeRow__value">Magnitude</h1>
        {props.mag}
        <h1 className="EarthquakeRow__value">More</h1>
        <EarthquakeDetailsButton/>
      </div>
  )
}

export default EarthquakeRow;

// export default class EarthquakeRow extends PureComponent {
//   constructor(props) {
//     super(props);
//
//     this.state = { expanded: false };
//     this.toggleDetails = this.toggleDetails.bind(this);
//   }
//
//   toggleDetails() {
//     this.setState(state => ({ expanded: !state.expanded }));
//   }
//
//   render() {
//     /** Don't forget to format the time here! */
//     return (
//       <div>
//         {/* This should return the details, all the values, and the details button */}
//         <h1 className="EarthquakeRow__value">ID</h1>
//         <h1 className="EarthquakeRow__value">Time</h1>
//         <h1 className="EarthquakeRow__value">Location</h1>
//         <h1 className="EarthquakeRow__value">Magnitude</h1>
//         <h1 className="EarthquakeRow__value">More</h1>
//         <EarthquakeDetailsButton/>
//       </div>
//     );
//   }
// }
//
// EarthquakeRow.propTypes = {
//   id: PropTypes.string,
//   time: PropTypes.string,
//   place: PropTypes.string,
//   mag: PropTypes.number,
//   longitude: PropTypes.number,
//   latitude: PropTypes.number,
// };
//
// EarthquakeRow.defaultProps = {
//   id: '',
//   time: '',
//   place: '',
//   mag: 0,
//   longitude: 0,
//   latitude: 0,
// };
