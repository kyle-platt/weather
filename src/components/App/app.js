import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.css';
import CurrentForecast from '../CurrentForecast/currentForecast';
import FiveDayForecast from '../FiveDayForecast/fiveDayForecast';
import NotFound from '../NotFound/notFound';
import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <Switch>
            <Route exact path={ROUTES.CURRENT_FORECAST} component={CurrentForecast} />
            <Route path={ROUTES.FIVE_DAY_FORECAST} component={FiveDayForecast} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default App;
