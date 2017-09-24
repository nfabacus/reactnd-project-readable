import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions/actions_category'

class Default extends Component {

  componentDidMount(){
    this.props.getCategories()
  }

  renderCategoryList() {
    // if(this.props.categories.length !==0){
    //   return this.props.categories.map(({name, path})=>
    //     <li key={path}>test{name}</li>)
    // }
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories.categories
  }
}

export default connect(mapStateToProps, {getCategories})(Default)