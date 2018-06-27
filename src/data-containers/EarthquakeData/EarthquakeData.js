import React, { Component } from 'react';

import organizeEarthquakes from 'utils/organizeEarthquakes';
import EarthquakeRow from 'components/EarthquakeRow/EarthquakeRow';

/**
 * Data Container for the app.  A higher order function that returns a container.
 *
 * https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
 *
 * It's main job is to fetch the earthquakes data from endpoint
 * and pipe that into the earthquakes component.  As well as to handle the data
 * filtering, sorting and slicing.
 */

class EarthquakeData extends Component {
    constructor(props) {
      super(props);

      this.state = {
        filter: '',
        earthquakes: [],
        organizedEarthquakes: [],
      };

      this.updateFilter = this.updateFilter.bind(this);
      this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
      /**
       * Write the logic to fetch the earthquakes here
       * It should sort filter and slice the data as soon as it loads.
       *
       * RETURN A PROMISE HERE FOR THE TEST TO WORK.
       */
       this.fetchData()
    }

    fetchData() {
      let corsUrl = 'https://cors-anywhere.herokuapp.com/',
        fetchUrl = 'http://interviewtest.getguru.com/seismic/data.json'
        fetch(corsUrl + fetchUrl)
        .then(response => response.json())
        .then(data => {
          this.setState({
          earthquakes: data
        })
      })
      .catch(error => {
        console.log(error);
        return error;
      });

    }

    updateFilter(filter) {
      this.setState({
        organizedEarthquakes: organizeEarthquakes(filter, this.state.earthquakes),
      });
    }


    render() {
      let sortedEarthquakeData = this.state.earthquakes
      .map((earthshake) => {
        return(
          <EarthquakeRow
            key={earthshake.id}
            id={earthshake.id}
            time={earthshake.time}
            place={earthshake.place}
            mag={earthshake.mag}
            lat={earthshake.latitude}
            long={earthshake.longitude}
          />
        )
      })
      return (
        <div>
          {sortedEarthquakeData}
        </div>
      );
    }
  }
export default EarthquakeData;
