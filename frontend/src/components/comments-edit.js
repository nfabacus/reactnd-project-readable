import React from 'react'
import PropTypes from 'prop-types'

const CommentsEdit =(props)=>{

    if(props.isCommentEditMode){
      return (
        <div className="modal-overlay">
          <div className="card-block">
            <input
              className="form-control"
              value={props.selectedComment.body}
              onChange={props.onCommentInputChange}
            />
            <button
              className="btn btn-warning m-2"
              onClick={props.saveCommentChange}
            >Save
            </button>
            <button
              className="btn btn-default m-2"
              onClick={props.cancelCommentEdit}
            >Cancel
            </button>
          </div>
        </div>
      )
    } else {
      return <span></span>
    }
}

CommentsEdit.propTypes = {
  isCommentEditMode: PropTypes.bool,
  selectedComment: PropTypes.object,
  onCommentInputChange: PropTypes.func,
  saveCommentChange: PropTypes.func,
  cancelCommentEdit: PropTypes.func  
}

export default CommentsEdit