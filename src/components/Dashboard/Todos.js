import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div class="card my-lg-2 d-sm" key={todo.id}>
          <div class="card-header py-lg-0 bg-success text-white">
            Todo <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span><span class="glyphicon glyphicon-calendar"></span> <span class="glyphicon glyphicon-road"></span>
          </div>{/* glyphicon glyphicon-flash */}
          <div class="card-body py-lg-2">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" onClick={() => {deleteTodo(todo.id)}} class="custom-control-input" id="customCheck1" />
              <label class="custom-control-label" for="customCheck1">{todo.content}</label>
              {/* <p class="card-text lead">{todo.content}</p> */}
            </div>
            {/* <h5 class="card-title">Special title treatment</h5> */}
            
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        // <div className="collection-item" key={todo.id}>
        //   <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        // </div>
      )
    })
  ) : (
      <p classNameName="center">You have no todo's left, yay!</p>
    );

  return (
    <div classNameName="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;
