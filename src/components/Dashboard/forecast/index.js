/*!
 * Weather API - for Todolist
 *
 * Copyright (c) 2011-2019, Kocheng Chin <rick5541960>
 * All rights reserved.
 *
 * @author  Anders Evenrud <andersevenrud@gmail.com>
 */

import React, { Component } from 'react';
import Weather from './Weather';
import * as serviceWorker from './serviceWorker';

class Forecast extends Component {
    render() {
        return (
            <div>
                <Weather />
            </div>
        );
    }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default Forecast;
