import React, { Component } from 'react';
import { FirebaseContext } from '../../contexts/FirebaseContext'

class Edit extends Component {
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

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { firstName, lastName,location } = this.state;
        this.context.db.collection('users').doc(this.state.user.uid).update({
            firstName,
            lastName,
            location,
        }).then(this.props.history.push('/profile-view'))
        .catch(error => {
            this.setState({ error })
        })
    }


    render() {
        return (
            <form className="col-lg-4 col-sm-12 mx-auto" onSubmit={this.handleSubmit}>
                <h1 className="display-6 my-4 mx-left text-primary ">User profile</h1>
                <hr className="my-4 bg-light" />
                <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="First name" required onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="password" className="form-control" id="lastName" placeholder="Last name" required onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label for="location">Location</label>
                    <input type="text" className="form-control" id="location" placeholder="Location" required onChange={this.handleChange} />
                </div>
                <button className="btn btn-lg btn-primary my-3" type="submit">Submit</button>
                <div className="text-danger center">
                            {this.state.error ? <p>{this.state.error.message}</p> : null}
                        </div>
                <p className="mt-4 mb-3 text-muted text-center">CS385 Team Project</p>
            </form>
        );
    }
}

export default Edit;