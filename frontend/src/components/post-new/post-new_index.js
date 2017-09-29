import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostNew extends Component {

  handleFormSubmit=(e)=>{
    e.preventDefault()
    //send states

  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h3>Create a Post</h3>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <form
              className="form"
              onSubmit={this.handleFormSubmit}
            >
              <div className="form-group">
                <label htmlFor="title">Title: </label>
                &emsp;
                <input type="text" name="title" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="body">Body: </label>
                &emsp;
                <input type="text" name="body" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author: </label>
                &emsp;
                <input type="text" name="author" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category: </label>
                &emsp;
                <input type="text" name="category" className="form-control" />
              </div>
              <div className="form-group">
                <button type="submit" name="category" className="btn btn-success">post it!</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null,{})(PostNew)

