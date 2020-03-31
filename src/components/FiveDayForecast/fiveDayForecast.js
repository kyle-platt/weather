import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const FiveDayForecast = () => {
    return (
        <div className="app-background">
            <Link to={ROUTES.CURRENT_FORECAST}>
                <button className='btn' type="button">back</button>
            </Link>
            <h1>Five Day Forecast</h1>
        </div>
    );
};

export default FiveDayForecast;
