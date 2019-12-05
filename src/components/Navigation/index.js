import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-inverse navbar-dark bg-primary navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">TODO LIST</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Sign in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign up</a>
                            </li> */}
                        </ul>
                    </div>

                    <Link className="btn btn-default navbar-btn btn-outline-light  navbar-right btn-right">Sign in</Link>&nbsp;&nbsp;
                    {/* <button type="button" className="btn btn-default navbar-btn btn-outline-light  navbar-right btn-right">Sign in</button>&nbsp;&nbsp; */}
                    <button type="button" className="btn btn-default navbar-btn btn-light text-primary btn-right">Sign up</button>

                </div>
            </nav>
        );
    }
}

export default Navigation;
