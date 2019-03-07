import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types' 
import PostForm from './PostForm'

import Spinner from '../common/Spinner'

import {getPosts} from '../../actions/postActions'

import PostFeed from './PostFeed'

class Posts extends Component {
	state = {

	}
	componentDidMount(){
		this.props.getPosts()
	}

  render() {
  	const {posts, loading} = this.props.post
  	let postContnet;
  	if(posts === null || loading){
  		postContnet = <Spinner/>	
  	}else{
  		postContnet = <PostFeed posts={posts} />
  	}
    return (
			<div className="feed">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
								<PostForm />
								{postContnet}
						</div>
					</div>
				</div>
			</div>
    )
   }
}
Posts.propTypes = {
	post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	post:state.post,
})
export default connect(mapStateToProps, {getPosts})(Posts)




