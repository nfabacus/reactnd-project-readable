import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getSinglePost, deletePost } from '../actions/actions_post'
import Comments from './comments-view'

class PostDetailView extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    console.log(id)
    this.props.getSinglePost(id)
    
  }

  onDeletePost = (id)=>{
    this.props.deletePost(id, ()=>{
      this.props.history.push("/")
    })
  }

  renderSinglePost() {
    if(this.props.singlePost!=={}) {
      const {
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore,
        // deleted
      } = this.props.singlePost
    
      let dateString = new Date(timestamp).toString()
      return (
        <div>
          <div className="jumbotron mt-3">
            <h1>{title}</h1>
            <h3 className="card-text">By: {author}</h3>
            <div>
              <Link to={`/post/edit/${id}`} ><button className="btn btn-default m-1">Edit</button></Link>
              <button className="btn btn-danger m-1" onClick={()=>this.onDeletePost(id)}>Delete</button>
            </div>
          </div>
          <div  key={id} className="card mb-2">
            <div className="card-block bg-warning">
              
              <p className="card-text">Submitted on: {dateString}</p>
              <h4 className="card-text">Category: {category}</h4>
              <h4 className="card-text">Votes: {voteScore}</h4>
              <h4 className="card-text">"{body}"</h4>
            </div>
          </div>
          {id&&<Comments postId={id} />}
        </div>
      )
    }
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
              {
                this.renderSinglePost()
              }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
    singlePost: state.posts.singlePost
  }
}

export default connect(mapStateToProps, {getSinglePost, deletePost})(PostDetailView)