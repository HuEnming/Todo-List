import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class TodoList extends Component {
    state = {
        todos: [
            { id: 1, content: 'buy some milk' },
            { id: 2, content: 'play mario kart' }
        ]
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        });
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos
        });
    }

    render() {
        return (
            <div className="col-lg-8 col-sm-12 mb-lg-0 h-100 overflow-auto ">
                <div>
                    <h1 className="text-center">Todo's</h1>
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                    {/* <footer class="footer">
                  <div class="container"> */}
                    <AddTodo addTodo={this.addTodo} />
                    {/* </div>
                </footer> */}

                </div>
            </div>
        );
    }
}

export default TodoList;