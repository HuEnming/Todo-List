import React, { Component } from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext'
import { Link } from "react-router-dom";

class ProfileView extends Component {
    static contextType = FirebaseContext
    state = {
        firstName: '',
        lastName: '',
        location: '',
        error: null
    }

    componentDidMount() {
        this.context.auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({ user });
                this.context.db.collection('users').doc(user.uid).get().then(doc => {
                    this.setState((preState) => ({ ...preState.user, ...doc.data() })
                    )
                });
            }else {
                this.props.history.push('/');
            }
        })
    }

    render() {
        return (
            <form className="col-lg-4 col-sm-12 mx-auto">
                <h1 className="display-6 my-4 mx-left text-primary ">User profile</h1>
                <hr className="my-4 bg-light" />
                <div className="form-group">
                    <label>First Name : </label><span> {this.firstName}</span>
                </div>
                <div className="form-group">
                    <label>Last Name : </label>
                    <span> {this.lastName}</span>
                </div>
                <div className="form-group">
                    <label>Location : </label>
                    <span> {this.location}</span>
                </div>
                <Link to="/profile-edit" className="btn btn-lg btn-primary my-3">Edit</Link>
                <div className="text-danger center">
                    {this.state.error ? <p>{this.state.error.message}</p> : null}
                </div>
                <p className="mt-4 mb-3 text-muted text-center">CS385 Team Project</p>
            </form>
        );
    }
}

export default ProfileView;