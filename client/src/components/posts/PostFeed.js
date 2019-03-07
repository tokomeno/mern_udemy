import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PostItem from './PostItem'

class PostFeed extends Component {
	state = {

	}
	componentWillMount(){

	}

  render() {
  	const {posts} = this.props
    return (
		<div>
			{posts && posts.map(post =>  (<PostItem key={post._id} post={post} /> )  ) }
		</div>
    )
   }
}
PostFeed.propTypes = {
	posts: PropTypes.array.isRequired
}

export default PostFeed

