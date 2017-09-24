import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/actions_category'
import { getPosts } from '../actions/actions_post'

class Default extends Component {

  componentDidMount(){
    this.props.getCategories()
    this.props.getPosts()
  }

  renderCategoryList() {
    if(this.props.categories.length !==0){
      return this.props.categories.map(({name, path})=>
        <li key={path}><a><h3>{name}</h3></a></li>)
    }
  }

  renderAllPosts() {
    if(this.props.posts.length !==0) {
      return this.props.posts.map(({
        author,
        body,
        category,
        deleted,
        id,
        timestamp,
        title,
        voteScore
      })=>
      <li key={id}>
        <div>
          <h3>{title} by {author} on {timestamp}</h3>
          <h3>Category: {category}</h3>
          <h3>Votes: {voteScore}</h3>
          <p>{body}</p>
        </div>
      </li>
      )
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>List of Categories</h1>
            <ul className="list--no-bullet">
              {
                this.renderCategoryList()
              }
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h1>List of Posts</h1>
            <ul className="list--no-bullet">
              {
                this.renderAllPosts()
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories,
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, {getCategories, getPosts})(Default)