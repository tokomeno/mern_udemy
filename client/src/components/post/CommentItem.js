import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'

class CommentItem extends Component {
	state = {

	}
	componentWillMount(){

	}

  render() {
  	const { comments, postId} = this.props
    return (
		<div>
			{comments.map(comment => (
					<CommentItem key={comment._id} comment={comment} postId={postId} />
			) 
			)}
		</div>
    )
   }
}
CommentItem.propTypes = {
	comments: PropTypes.array.isRequired,
	postId: PropTypes.string.isRequired,
}

export default CommentItem

