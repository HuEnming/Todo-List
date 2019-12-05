import React, { Component } from 'react';

class Home extends Component {
    state = {}
    render() {
        const jumbotronStyles = {
            'padding-bottom': '16%'
          };
        return (
            <div class="jumbotron  bg-white">
                <h1 class="display-4">Hello, world!</h1>
                <hr class="my-4 bg-light" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                <button type="button" className="btn btn-default btn-lg btn-light text-primary btn-right">Create new account</button>
            </div>
        );
    }
}

export default Home;