import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const NotFound = () => {
    return (
        <div className="app-background">
            <h1>Sorry, we can't find what you are looking for.</h1>
            <Link to={ROUTES.CURRENT_FORECAST}>
                <button className='btn' type="button">Current Forecast</button>
            </Link>
        </div>
    );
};

export default NotFound;
