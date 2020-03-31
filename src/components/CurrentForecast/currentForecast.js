import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const CurrentForecast = () => {
    // Define local state
    const [temp, setTemp] = useState(undefined);
    const [date, setDate] = useState(undefined);
    const [iconId, setIconId] = useState('');
    const [location, setLocation] = useState('');

    const getCurrentForecast = () => {
        // Construct url & the params
        const url = 'http://api.openweathermap.org/data/2.5/weather?';
        const params = new URLSearchParams();
        params.append('q', 'ferndale,michigan');
        params.append('appid', 'e8400ff2f1a43f8026df176847383f7f');
        params.append('units', 'imperial');

        // Get the current conditions. If successful, set state of needed fields. If error redirect to error page.
        axios.get(url + params)
        .then((response) => {
            const temperature = response?.data?.main?.temp;
            const unixTimestamp = response?.data?.dt;
            temperature && setTemp(Math.trunc(temperature));
            unixTimestamp && setDate(new Date(unixTimestamp * 1000).toDateString());
            setIconId(_.first(response?.data?.weather)?.icon);
            setLocation(response?.data?.name);
        });
    };
    
    useEffect(() => {
        getCurrentForecast();
    }, []);

    return (
        <div className="app-background">
            <h1>Current Forecast</h1>
            {
                iconId && (
                    <img className='current-conditions-icon' src={`http://openweathermap.org/img/w/${iconId}.png`} alt='Current Conditions'/>
                )
            }
            <h2 className='lrg-text'>{temp}&deg;F</h2>
            <div className='md-text'>{location}</div>
            <div>{date}</div>
            <Link className='margin-40' to={ROUTES.FIVE_DAY_FORECAST}>
                <button className='btn' type="button">view five day forecast</button>
            </Link>
        </div>
    );
};

export default CurrentForecast;
