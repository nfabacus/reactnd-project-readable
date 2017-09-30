import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewPost } from '../actions/actions_post'
import { getCategories } from '../actions/actions_category'
import _ from 'lodash'

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

  componentDidMount() {
    this.props.getCategories()
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.categories!==this.props.categories){
      this.setState({
        category: nextProps.categories[0].name
      })
    }
  }



  handleFormSubmit=(e)=>{
    e.preventDefault()
    //send states
    const newPostObj = {
      id: _.uniqueId('post_'),
      timestamp: new Date().getTime(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category:this.state.category
    }
    this.props.addNewPost(newPostObj,()=>{
      console.log("props::", this.props)
      this.props.history.push("/")
    })

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
                <textarea
                  value={this.state.body}
                  onChange={this.onBodyChange}
                  name="body"
                  className="form-control"
                ></textarea>
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
                <select
                  value={this.state.category}
                  onChange={this.onCategoryChange}
                >
                {this.props.categories.map((category, index)=>(
                  <option key={index} value={category.name}>{category.name}</option>
                ))}
                </select>
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

const mapStateToProps = (state)=>{
  return {
    categories: state.categories.categories
  }
}

export default connect(mapStateToProps,{addNewPost, getCategories})(PostNew)

