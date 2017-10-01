import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategoryPosts, upVotePost, downVotePost } from '../actions/actions_post'

class CategoryView extends Component {

  state={
    voteScoreSorting: "d",
    timestampSorting: null,
    selectedSorting: "voteScoreSorting"
  }

  componentDidMount() {
    const { url } = this.props.match.params
    console.log(url)
    this.props.getCategoryPosts(url)
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
    if(this.props.categoryPosts.length !==0) {
      return this.props.categoryPosts.sort(this.sortBySelectedSorting).map(({
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore,
        deleted
      })=>{
        let dateString = new Date(timestamp).toString()
        return (
          <div  key={id} className="card mb-2">
          <div className="card-block bg-warning">
            <Link to={`/posts/${id}`}><h3 className="card-text">{title}</h3></Link>
            <p className="card-text">{dateString}</p>
            <h4 className="card-text">Votes: {voteScore}
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
    const { url } = this.props.match.params
    return (
      <div className="container">
        <div className="jumbotron mt-3">
        <h1>{url.toUpperCase()}</h1>
        </div>
        
        <div className="row">
          <div className="col-sm-12">
            <h2>List of Posts</h2>
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

const mapStateToProps = (state)=>{
  return {
    categoryPosts: state.posts.categoryPosts
  }
}

export default connect(mapStateToProps, {getCategoryPosts, upVotePost, downVotePost})(CategoryView)