import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { updatePost, getSinglePost } from '../actions/actions_post'
import { getCategories } from '../actions/actions_category'

class PostEdit extends Component {
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
    const { id } = this.props.match.params
    this.props.getCategories()
    this.props.getSinglePost(id)
    
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.categories!==this.props.categories){
      this.setState({
        category: nextProps.categories[0].name
      })
    }
    if(nextProps.singlePost!==this.props.singlePost){
      const { title, body, author, category } = nextProps.singlePost
      this.setState({
        title,
        body,
        author,
        category
      })
    }
  }

  handleFormSubmit=(e)=>{
    e.preventDefault()
    //send states
    const { id } = this.props.match.params
    const updatePostObj = {
      id,
      timestamp: new Date().getTime(),
      title: this.state.title,
      body: this.state.body,
      // author: this.state.author,
      // category:this.state.category
    }
    this.props.updatePost(updatePostObj,()=>{
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

  render() {
    const { id } = this.props.match.params
    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h3>Edit the Post</h3>
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
                <label htmlFor="author">Author: {this.state.author}</label>
              </div>
              <div className="form-group">
                <label htmlFor="category">Category:{this.state.category}</label>
              </div>
              <div className="form-group">
                <button type="submit" name="category" className="btn btn-success m-1">post it!</button>
                <Link to={`/posts/${id}`}>
                  <button className="btn btn-default m-1">Cancel</button>
                </Link>
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
    categories: state.categories.categories,
    singlePost: state.posts.singlePost
  }
}

export default connect(mapStateToProps,{getCategories, getSinglePost, updatePost })(PostEdit)

