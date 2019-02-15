const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')
const passport = require('passport')

const Post = require('../../models/Post')
const Profile = require('../../models/Profile')

const validatePostInput = require('../../validation/post')

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Posts Works' }));



router.post('/', passport.authenticate('jwt', {session: false }),(req, res) => {

	const {errors, isValid} = validatePostInput(req.body)

	if(!isValid){
		return res.status(400).json(errors)
	}

	const newPost = new Post({
		text: req.body.text,
		name: req.body.name,
		avatar: req.body.name,
		user: req.user.id
	})
	newPost.save()
		.then(post => res.json(post))
		.catch(err => console.log(err))
} )


router.get('/', (req, res) => {
	Post.find()
		.sort({data: -1})
		.then(posts => {
			return res.json(posts)
		})
		.catch(err => err.status(404))

})

router.get('/:id', (req, res) => {
	Post.findById(req.params.id)
		.then(post => {
			return res.json(post)
		})
		.catch(err => res.status(404).json({data: 'no post fund'}))

})


router.delete('/:id',  passport.authenticate('jwt', {session: false }),(req, res) => {

	Profile.findOne({user: req.user.id})
		.then(profile => {
			Post.findById(req.params.id)
				.then(post => {
					if(post.user.toString() !== req.user.id){
						return res.status(401).json({notauthorized: 'Use not authorized'})
					}

					post.remove().then(() => res.json({success: true}))
				})
			.catch(err => res.status(404).json(err))
		})

		.catch(err => res.status(404).json({data: 'no post fund'}))

})




router.post('/likes/:id',  passport.authenticate('jwt', {session: false }),(req, res) => {
	console.log(req.user.id, 'a')
	Profile.findOne({user: req.user.id})
		.then(profile => {
			console.log(profile, 'p')
			Post.findById(req.params.id)
				.then(post => {
					 if(post.likes.filter(like => like.user.toString() == req.user.id).length > 0 ){
					 	console.log(post, '0000000000000000000000000')
						return res.status(400).json({alreadyliked: 'User already liked this post'})
					 }

					 post.likes.unshift({user: req.user.id})

					 post.save().then(post => res.json(post))
				})
			.catch(err => res.status(404).json(err))
		})

		.catch(err => res.status(404).json({data: 'no post fund'}))

})



router.post('/unlike/:id',  passport.authenticate('jwt', {session: false }),(req, res) => {
	console.log(req.user.id, 'a')
	Profile.findOne({user: req.user.id})
		.then(profile => {
			console.log(profile, 'p')
			Post.findById(req.params.id)
				.then(post => {
					 if(post.likes.filter(like => like.user.toString() == req.user.id).length === 0 ){
						return res.status(400).json({alreadyliked: 'u dont liked this post'})
					 }

					 const removedIndex = post.likes.map(p => p.user.toString()).indexOf(req.user.id)

					 post.likes.splice(removedIndex, 1)

					 post.save().then(post => res.json(post))
				})
			.catch(err => res.status(404).json(err))
		})

		.catch(err => res.status(404).json({data: 'no post fund'}))

})


router.post('/comment/:id', passport.authenticate('jwt', {session: false}), (req, res) => {
	Post.findById(req.params.id)
		.then(post => {
			const newComment = {
				text: req.body.text,
				name: req.body.avatar,
				user: req.user.id
			}

			post.comments.unshift(newComment)

			// save
			post.save().then(post => res.json(post))
		})
		.catch(err => res.status(401).json({msg: 'no pasto found'}))
})


module.exports = router;
