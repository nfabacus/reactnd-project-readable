import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentsEdit from './comments-edit'
import CommentsNew from './comments-new'
import PropTypes from 'prop-types'
import { getComments, updateComment, upVoteComment, downVoteComment, deleteComment } from '../actions/actions_comment'

class Comments extends Component {

  state={
    isCommentEditMode: false,
    selectedComment: null
  }

  componentDidMount(){
    console.log("this.props.postId::", this.props.postId)
    this.props.getComments(this.props.postId)
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.postId!==this.props.postId){
      this.props.getComments(nextProps.postId)
    }
  }

  sortByVoteScore=(a, b)=>{
    return b.voteScore-a.voteScore
  }

  openCommentEditMode=(id, body)=>{
    console.log(id, body)
    this.setState({
      isCommentEditMode: true,
      selectedComment: {id, body}
    })
  }

  onDeleteComment=(id)=>{
    this.props.deleteComment(id)
  }

  renderAllComments(){
    if(this.props.comments.length !==0) {
      return this.props.comments.sort(this.sortByVoteScore).map(({
        author,
        body,
        deleted,
        id,
        parentDeleted,
        parentId,
        timestamp,
        voteScore
      })=>{
        let dateString = new Date(timestamp).toString()
          return (
            <div  key={id} className="card mb-2">
              <div className="card-block">
                <p className="card-text">{dateString}</p>
                <p className="card-text">{body} - {author}</p>
                <button
                  className="btn btn-success m-2"
                  onClick={()=>this.openCommentEditMode(id, body)}
                >Edit
                </button>
                <button
                  className="btn btn-danger m-2"
                  onClick={()=>{this.onDeleteComment(id)}}
                >Delete 
                </button>
                <h4 className="card-text">
                  Votes: {voteScore}
                  <i 
                  onClick={()=>this.props.downVoteComment(id)}
                  className="fa fa-thumbs-o-down m-2" aria-hidden="true"></i>
                  <i 
                    onClick={()=>this.props.upVoteComment(id)}
                    className="fa fa-thumbs-o-up m-2" aria-hidden="true"></i>
                </h4>
              </div>
            </div>
          )
      })
    }
  }

  onCommentInputChange=(e)=>{
    this.setState({
      selectedComment: {...this.state.selectedComment, body: e.target.value}
    })
  }

  saveCommentChange=()=>{
    const updateCommentObj = { ...this.state.selectedComment, timestamp: new Date().getTime()}
    this.props.updateComment(updateCommentObj,()=>{
      this.setState({
        isCommentEditMode: false,
        selectedComment: null
      })
    })
  }

  cancelCommentEdit=()=>{
    this.setState({
      isCommentEditMode: false,
      selectedComment: null
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <CommentsNew postId={this.props.postId} />
            <CommentsEdit
              isCommentEditMode={this.state.isCommentEditMode}
              selectedComment={this.state.selectedComment}
              onCommentInputChange={this.onCommentInputChange}
              saveCommentChange={this.saveCommentChange}
              cancelCommentEdit={this.cancelCommentEdit}
            />
            <div className="card-block">
              {
                this.renderAllComments()
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Comments.propTypes = {
  postId: PropTypes.string
}

const mapStateToProps = (state)=>{
  return {
    comments: state.comments.comments
  }
}

export default connect(mapStateToProps, {getComments, updateComment, upVoteComment, downVoteComment, deleteComment })(Comments)