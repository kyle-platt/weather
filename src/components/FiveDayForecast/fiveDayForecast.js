import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const FiveDayForecast = () => {
    return (
        <div className="app-background">
            <Link to={ROUTES.CURRENT_FORECAST}>back</Link>
            <h1>Five Day Forecast</h1>
        </div>
    );
};

export default FiveDayForecast;
