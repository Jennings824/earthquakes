import React from 'react';
import ReactDOM from 'react-dom';

import EarthquakeData from 'data-containers/EarthquakeData/EarthquakeData';
import Earthquakes from 'components/Earthquakes/Earthquakes';

import 'index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<EarthquakeData />, document.body);
registerServiceWorker();
