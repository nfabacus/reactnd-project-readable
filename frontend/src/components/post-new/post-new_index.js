import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Field, FieldArray, reduxForm } from 'redux-form'

class PostNew extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h3>Create a Post</h3>
        </div>
      </div>
    )
  }
}

export default connect(null,{})(PostNew)

