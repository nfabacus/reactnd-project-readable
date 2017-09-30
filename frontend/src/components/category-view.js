import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategoryPosts } from '../actions/actions_post'

class CategoryView extends Component {
  componentDidMount() {
    const { url } = this.props.match.params
    console.log(url)
    this.props.getCategoryPosts(url)
    
  }

  renderAllPosts() {
    if(this.props.categoryPosts.length !==0) {
      return this.props.categoryPosts.map(({
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore,
        deleted
      })=>{
        return (
          <div  key={id} className="card mb-2">
          <div className="card-block bg-warning">
            <Link to={`/posts/${id}`}><h3 className="card-text">{title}</h3></Link>
            <h4 className="card-text">Votes: {voteScore}</h4>
          </div>
        </div>
        )
      })
    }
  }

  render() {
    const { url } = this.props.match.params
    return (
      <div className="container">
        <div className="jumbotron mt-3">
        <h1>{url.toUpperCase()}</h1>
        </div>
        
        <div className="row">
          <div className="col-sm-12">
            <h2>List of Posts</h2>
              {
                this.renderAllPosts()
              }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    categoryPosts: state.posts.categoryPosts
  }
}

export default connect(mapStateToProps, {getCategoryPosts})(CategoryView)