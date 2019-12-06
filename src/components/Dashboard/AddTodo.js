import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   const { content, userId } = this.state
  //   const amount = Number(this.state.amount)
  //   const timestamp = new Date().toLocaleString()
  //   this.context.db.collection('todos').add({
  //     content, timestamp, userId,content,isFinished:false,
  //     dueDateTime:null,location:null
  //   })
  //     .then(() => {
  //       //this.setState()
  //     })
  //     .catch(error => {
  //       this.setState({ error })//弹窗提示
  //     });
  // }

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  }

  handleAddTodo = e => {
    e.preventDefault();
    // call function to add a todo
    this.props.addTodo(this.state.content);
  }
  render() {
    return (
      <div className="col-lg-8" style={{ position: 'fixed', bottom: 0, 'paddingLeft': 0 }} >
        {/* style = {{position:'absolute', bottom:0}} */}
        {/* <div style={{position:'absolute',bottom:'5px',right:'0px',margin:'0'}}>
       <div className="col-lg-8 col-sm-12 mr-0 fixed-bottom"> */}
        <form onSubmit={this.handleAddTodo}>
          {/* <label>Add a new task:</label> 
           <input type="text" onChange={this.handleChange} value={this.state.content} /> */}
          <div className="input-group mb-3">
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Add a new task" onChange={this.handleChange} value={this.state.content} />
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