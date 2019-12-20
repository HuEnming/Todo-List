import React, { Component } from 'react';
import Forecast from './forecast'

class WeatherBar extends Component {
    state = {}
    render() {
        return (
            <div className="col-lg-4 col-sm-12 h-100 overflow-auto"> 
				<Forecast/>
            </div>
        );
    }
}

export default WeatherBar;