import React from 'react';

const Todos = ({ todos, finishedTodo, deleteTodo }) => {
  const todoList = todos ? (
    todos.map(todo => {
      return (
        <div className="card my-lg-2 d-sm" key={todo.todoId}>
          <div className="card-header py-lg-0 bg-success text-white">
            Todo
            <button type="button" className="close text-light" aria-label="Close" onClick={e => { deleteTodo(todo.todoId) }}>
              <span aria-hidden="true">&times;</span>
            </button>
            {/* <span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span><span className="glyphicon glyphicon-calendar"></span> <span className="glyphicon glyphicon-road"></span> */}
          </div>{/* glyphicon glyphicon-flash */}
          <div className="card-body py-lg-2">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" onClick={e => { finishedTodo(todo.todoId) }} className="custom-control-input" id="isFinished" />
              <label className="custom-control-label" htmlFor="isFinished">{todo.content}</label>
              {/* <p className="card-text lead">{todo.content}</p> */}
            </div>
            {/* <h5 className="card-title">Special title treatment</h5> */}
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        // <div className="collection-item" key={todo.id}>
        //   <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        // </div>
      )
    })
  ) : (
      <p className="center text-light bg-success">You have no todo's left, yay!</p>
    );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;
