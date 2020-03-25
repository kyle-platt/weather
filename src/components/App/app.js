import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';
import CurrentForecast from '../CurrentForecast/currentForecast';
import FiveDayForecast from '../FiveDayForecast/fiveDayForecast';
import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <Route exact path={ROUTES.CURRENT_FORECAST} component={CurrentForecast} />
        <Route path={ROUTES.FIVE_DAY_FORECAST} component={FiveDayForecast} />
    </Router>
);

export default App;
