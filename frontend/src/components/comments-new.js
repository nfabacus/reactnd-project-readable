import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewComment, getComments } from '../actions/actions_comment'
import _ from 'lodash'
import PropTypes from 'prop-types'

class CommentsNew extends Component {
  state={
    isNewCommentMode: false,
    body: "",
    author:""
  }

  openNewCommentMode=()=>{
    this.setState({
      isNewCommentMode: true
    })
  }
  closeNewCommentMode=()=>{
    this.setState({
      isNewCommentMode: false
    })
  }

  handleAddNewComment=()=>{
    const newCommentObj = {
      id: _.uniqueId('comment_'),
      timestamp: new Date().getTime(),
      body: this.state.body,
      author: this.state.author,
      parentId: this.props.postId
    }
    this.props.addNewComment(newCommentObj,()=>{
      this.props.getComments(this.props.postId)
      this.setState({
        isNewCommentMode: false,
        body:"",
        author:""
      })
    })
  }

  onBodyChange=(e)=>{
    this.setState({
      body: e.target.value
    })
  }
  
  onAuthorChange=(e)=>{
    this.setState({
      author: e.target.value
    })
  }

  render(){
    if(!this.state.isNewCommentMode){
      return (
        <div className="card-block">
          <button
            onClick={this.openNewCommentMode}
            className="btn btn-success"
          >Add A New Comment
          </button>
        </div>
      )
    } else {
      return (
        <div className="card-block">
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <input
              value={this.state.body}
              onChange={this.onBodyChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input
              value={this.state.author}
              onChange={this.onAuthorChange}
              className="form-control"
            />
          </div>
          <button
            onClick={this.handleAddNewComment}
            className="btn btn-success m-2"
        >Comment it!
        </button>
        <button
            onClick={this.closeNewCommentMode}
            className="btn btn-warning m-2"
        >Cancel
        </button>
      </div>
      )
    }
    
  }
}

CommentsNew.propTypes = {
  postId: PropTypes.string
}

export default connect(null, {addNewComment, getComments})(CommentsNew)