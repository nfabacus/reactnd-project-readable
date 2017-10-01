import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategories } from '../actions/actions_category'
import { getPosts, upVotePost, downVotePost } from '../actions/actions_post'
import 'font-awesome/css/font-awesome.css'

class Default extends Component {
  constructor(props){
    super(props)
    this.state = {
      voteScoreSorting: "d",
      timestampSorting: null,
      selectedSorting: "voteScoreSorting"
    }
  }

  componentDidMount(){
    this.props.getCategories()
    this.props.getPosts()
  }

  renderCategoryList() {
    if(this.props.categories.length !==0){
      return this.props.categories.map(({name, path})=>
        <Link to={`/category/${name}`} key={path}><h3>{name}</h3></Link>)
    }
  }

  toggleVoteScoreSorting=()=>{
    this.setState({
      selectedSorting: "voteScoreSorting",
      voteScoreSorting: this.state.voteScoreSorting ===null?"d":this.state.voteScoreSorting==="d"?"a":null,
      timestampSorting: null
    })
  }

  toggleTimestampSorting=()=>{
    this.setState({
      selectedSorting: "timestampSorting",
      voteScoreSorting: null,
      timestampSorting: this.state.timestampSorting ===null?"d":this.state.timestampSorting==="d"?"a":null
    })
  }

  sortByVoteScore = (a, b) =>{
    const { voteScoreSorting } = this.state
    if(voteScoreSorting === null) return 0
    return voteScoreSorting === 'a' ?a.voteScore-b.voteScore:b.voteScore-a.voteScore
  }

  sortByTimestamp =(a, b)=>{
    const { timestampSorting } = this.state
    if(timestampSorting ===null) return 0
    return timestampSorting ==="a"? a.timestamp-b.timestamp: b.timestamp-a.timestamp
  }

  sortBySelectedSorting=(a, b)=> {
    switch(this.state.selectedSorting) {
      case 'voteScoreSorting':
        return this.sortByVoteScore(a, b)
      case 'timestampSorting':
        return this.sortByTimestamp(a, b)
      default:
        return 0
    }
  }

  renderAllPosts() {
    if(this.props.posts.length !==0) {
      return this.props.posts.sort(this.sortBySelectedSorting).map(({
        author,
        body,
        category,
        deleted,
        id,
        timestamp,
        title,
        voteScore
      })=>{
        let dateString = new Date(timestamp).toString()
        return (
          <div  key={id} className="card mb-2">
            <div className="card-block bg-warning">
              <Link to={`/posts/${id}`}><h3 className="card-text">{title}</h3></Link>
              <p className="card-text">{dateString}</p>
              <h4 className="card-text">
                Votes: {voteScore}
                <i 
                  onClick={()=>this.props.downVotePost(id)}
                  className="fa fa-thumbs-o-down m-2" aria-hidden="true"></i>
                <i 
                  onClick={()=>this.props.upVotePost(id)}
                  className="fa fa-thumbs-o-up m-2" aria-hidden="true"></i>
              </h4>
            </div>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <br />
            <div className="card text-center">
              <div className="card-header">
              <h2 className="card-title">List of Categories</h2>
              </div>
              <div className="card-block">
                {
                  this.renderCategoryList()
                }
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-sm-12">
            <h2>List of Posts</h2>
            <Link to="/post/new" className="btn btn-success m-3">Add A New Post</Link>
            <div className="form-group">
              <button onClick={this.toggleVoteScoreSorting} className="btn btn-default">
                Sort By Votes {this.state.voteScoreSorting===null?
                "":this.state.voteScoreSorting==="a"?
                <i className="fa fa-sort-asc" aria-hidden="true"></i>:
                <i className="fa fa-sort-desc" aria-hidden="true"></i>
                }
              </button>
              &emsp;
              <button onClick={this.toggleTimestampSorting} className="btn btn-default">
                Sort By Date {this.state.timestampSorting===null?
                "":this.state.timestampSorting==="a"?
                <i className="fa fa-sort-asc" aria-hidden="true"></i>:
                <i className="fa fa-sort-desc" aria-hidden="true"></i>
                }
              </button>
            </div>
              {
                this.renderAllPosts()
              }
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

export default connect(mapStateToProps, {getCategories, getPosts, upVotePost, downVotePost })(Default)