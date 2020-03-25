import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const CurrentForecast = () => {
    return (
        <div className="app-background">
            <h1>Current Forecast</h1>
            <Link to={ROUTES.FIVE_DAY_FORECAST}>
                <button type="button">view five day forecast</button>
            </Link>
        </div>
    );
};

export default CurrentForecast;
