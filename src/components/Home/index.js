import React, { Component } from 'react';

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="jumbotron bg-white">
                <h1 className="display-4">Hello, world!</h1>
                <h1 className="display-4">你好，世界！</h1>
                <hr className="my-4 bg-light" />
                <p>This is a exercise project for learning React, Firebase and web API.</p>
                <a href="https://github.com/HuEnming/Todo-List" className="btn btn-primary btn-lg" role="button">About us</a>
                {/* <button type="button" className="btn btn-default btn-lg btn-light text-primary btn-right" >Create new account</button> */}
                <a className="btn btn-default btn-lg btn-light text-primary btn-right mx-1" href="/signup" role="button">Create new account</a>
            </div>
        );
    }
}

export default Home;