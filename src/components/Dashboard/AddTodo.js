import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div className="col-lg-8" style={{position: 'fixed',bottom: 0,'padding-left': 0}} >
        {/* style = {{position:'absolute', bottom:0}} */}
      {/* <div style={{position:'absolute',bottom:'5px',right:'0px',margin:'0'}}>
       <div className="col-lg-8 col-sm-12 mr-0 fixed-bottom"> */}
        <form onSubmit={this.handleSubmit}>
          {/* <label>Add a new task:</label> 
           <input type="text" onChange={this.handleChange} value={this.state.content} /> */}
          <div className="input-group mb-3">
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Add a new task" onChange={this.handleChange} value={this.state.content}/>
            <div className="input-group-append">
              <button className="input-group-text bg-primary text-white border-primary" id="inputGroup-sizing-default" type="submit" type="submit">Push</button>
              {/* <span className="input-group-text bg-primary text-white border-primary" id="inputGroup-sizing-default" type="submit">Push</span> */}
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AddTodo