import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "",
      body: "",
      author: "",
      category: ""
    }
  }

  handleFormSubmit=(e)=>{
    e.preventDefault()
    //send states
  }

  onTitleChange = (e)=>{
    this.setState ({
      title: e.target.value
    })
  }

  onBodyChange = (e)=>{
    this.setState ({
      body: e.target.value
    })
  }

  onAuthorChange = (e)=>{
    this.setState ({
      author: e.target.value
    })
  }

  onCategoryChange = (e)=>{
    this.setState ({
      category: e.target.value
    })
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
                <input
                  value={this.state.title}
                  onChange={this.onTitleChange}
                  type="text"
                  name="title"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="body">Body: </label>
                &emsp;
                <input
                  value={this.state.body}
                  onChange={this.onBodyChange}
                  type="text"
                  name="body"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author: </label>
                &emsp;
                <input
                  value={this.state.author}
                  onChange={this.onAuthorChange}
                  type="text"
                  name="author"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category: </label>
                &emsp;
                <input
                  value={this.state.category}
                  onChange={this.onCategoryChange}
                  type="text"
                  name="category"
                  className="form-control"
                />
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

