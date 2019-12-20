import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import ProfileEdit from './components/ProfileEdit'
import ProfileView from './components/ProfileView'

class App extends Component {
  state = {}

  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/profile-view' component={ProfileView} />
            <Route path='/profile-edit' component={ProfileEdit} />
          </Switch>
        </Router>
      </div>
      // <>
      // <Navigation />
      // <Home />
      // </>//React.Fragment
      // <div className="todo-app container">
      //   <h1 className="center blue-text">Todo's</h1>
      //   <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      //   <AddTodo addTodo={this.addTodo} />
      // </div>
    );
  }
}

export default App;
