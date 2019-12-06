import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import { FirebaseContext } from '../../contexts/FirebaseContext'

class TodoList extends Component {
    static contextType = FirebaseContext;
    state = {
        user: null,
        todos: null,
        error: null,
        counter: 0,
        isFinishedOrPlaned: false,
        // todos: [
        //     { id: 1, content: 'buy some milk' },
        //     { id: 2, content: 'play mario kart' }
        // ]
    }

    componentDidMount() {
        this.context.auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({ user })
                let todos = [];
                let todosRef = this.context.db.collection('todos');
                todosRef.where('userId', '==', user.uid).where('isFinished', '==', false).get()
                    .then(snapshot => {
                        if (snapshot.empty) {
                            console.log('No matching documents.');
                            return;
                        } else {
                            snapshot.forEach(doc => {
                                todos.push({ ...doc.data(), todoId: doc.id })
                                this.setState({ todos })
                            });
                        }
                    })
                    .catch(err => {
                        console.log('Error getting documents', err);
                    });
            } else {
                this.props.history.push('/');
            }
        })
    }

    handleAddTodo = (todoContent) => {
        const timestamp = new Date().toLocaleString();
        let result = this.context.db.collection('todos').add({
            timestamp, userId: this.state.user.uid, content: todoContent, isFinished: false,
            dueDateTime: null, location: null,
        })
            .then(() => {
                this.setState((prevState) => ({
                    counter: prevState.counter + 1
                }));
            })
            .catch(error => {
                this.setState({ error });//弹窗提示
            });
    }

    handleFinishTodo = (todoId) => {
        this.context.db.collection('todos').doc(todoId)
            .update({
                isFinished: true
            }).catch(error => {
                this.setState({ error })
            })
    }

    handleDeleteTodo = (todoId) => {
        this.context.db.collection('todos').doc(todoId).delete()
            .then(() => {
                let todos = this.state.todos.filter(x => x.todoId !== todoId)
                this.setState({ todos })
            }
            ).catch(error => {
                this.setState({ error })
            })
    }

    handleChange = e => {
        this.setState({
          content: e.target.value
        });
      }

    render() {
        return (
            <div className="col-lg-8 col-sm-12 mb-lg-0 h-100 overflow-auto ">
                <div>
                    <div className="row">
                        <h2 className="col-3 text-left mt-3 mb=2">Todos</h2>
                        {/* <button type="button" className="close text-primary" aria-label="Close">
                        <span aria-hidden="true">&radic;</span>
                    </button> */}
                        <div className="col-3 custom-control custom-checkbox mx-right">
                            <input type="checkbox" className="custom-control-input" id="isFinishedOrPlaned" onChange={this.handleChange} value={this.state.isFinishedOrPlaned} />
                            <button type="button" class="btn btn-info">{this.state.isFinishedOrPlaned ? 'Finished' : 'Planed'}</button>
                            <label className="custom-control-label" htmlFor="isFinishedOrPlaned"></label>
                        </div>
                    </div>
                    <hr className="mb-2 bg-light" />
                    <Todos todos={this.state.todos} finishedTodo={this.handleFinishTodo} deleteTodo={this.handleDeleteTodo} />
                    {/* <footer class="footer">
                  <div class="container"> */}
                    <AddTodo addTodo={this.handleAddTodo} />
                    {/* </div>
                </footer> */}

                </div>
            </div>
        );
    }
}

export default TodoList;