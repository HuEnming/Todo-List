import React, { Component } from 'react';
import {FirebaseContext} from '../../contexts/FirebaseContext'

class Signin extends Component {
    static contextType = FirebaseContext
    state = {
        email: '',
        password: '',
        error: null
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handlePasswordReset = e => {
        this.context.auth.sendPasswordResetEmail(this.state.email)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //console.log(firebase)
        const { email, password } = this.state;
        //console.log(email, password)
        //this.props.firebase
        this.context.auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    email: '',
                    password: '',
                    error: null
                });
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ error })
            })
    }

    render() {
        return (
            <form className="form-signin text-center" >
                <h1 className="display-6 my-4 mx-left text-primary ">Sign in</h1>
                <hr className="my-4 bg-light col-2 " />
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control col-lg-2 mx-auto mt-3" placeholder="Email address" required autoFocus onChange={this.handleChange} />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control col-lg-2 mx-auto" placeholder="Password" required onChange={this.handleChange} />
                {/* <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div> */}
                <button className="btn btn-lg btn-primary mt-5 col-lg-2" type="submit">Sign in</button>
                <div className="my-3"><a href="/#" onClick={() => this.handlePasswordReset()}>Forgot password ?</a></div>
                <div className="red-text center">
                    {this.state.error ? <p>{this.state.error.message}</p> : null}
                </div>
                <p className="mt-5 mb-3 text-muted">CS385 Team Project</p>
            </form >
        );
    }
}

export default Signin;