import React, {Component} from 'react'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import {getPost} from '../../actions/postActions'
import PostItem from '../posts/PostItem'


import CommentForm from './CommentForm'


class Post extends Component {

	componentDidMount() {
		this.props.getPost(this.props.match.params.id)
	}
	render(){
		const { post, loading} = this.props.post 
		let postContent;
		if(post === null || loading || Object.keys(post).length === 0){
			postContent = <Spinner/>
		}else{
			postContent = (
				<div>	
					<PostItem post={post} />
					<CommentForm></CommentForm>
				</div>
			)
		}
		return (
			<div>
				<h1>Post</h1>
				{postContent}
			</div>
		)
	}
}

Post.propsTypes = {
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
	post: state.post
})


export default connect(mapStateToProps, {getPost})(Post)