import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import axios from 'axios'
import {connect} from 'react-redux'
import {loginUser} from '../../actions/authActions'
// import classnames from 'classnames'

import TextFieldGroup from '../common/TextFieldGroup'

class Login extends Component {
	constructor(){
		super();
		this.state = {
			email:'',
			password:'',
			errors:{}
		}
	}
	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	onSubmit = e => {
		e.preventDefault()
		const user = {
			email: this.state.email,
			password: this.state.password,
		}
		console.log(user)
		this.props.loginUser(user)
	}
	componentDidMount(){
		if(this.props.auth.isAuthenticated){
			this.props.history.push('/dashboard')
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.auth.isAuthenticated){
			this.props.history.push('/dashboard')
		}
	    if(nextProps.errors){
	      this.setState({errors: nextProps.errors})
	    }
	}

  render() {
  	  const {errors} = this.state
    return (
	  <div className="login">
	    <div className="container">
	      <div className="row">
	        <div className="col-md-8 m-auto">
	          <h1 className="display-4 text-center">Log In</h1>
	          <p className="lead text-center">Sign in to your DevConnector account</p>
	          <form onSubmit={this.onSubmit}>
				<TextFieldGroup
					placeholder="Email Address"
					name="email"
					type="email"
					value={this.state.email}
					onChange={this.onChange}
					error={errors.email}
	            />
	            <TextFieldGroup
					type="password"
					placeholder="Password"
					name="password"
					value={this.state.password}
					onChange={this.onChange}
					error={errors.password}
	            />
	            <input type="submit" className="btn btn-info btn-block mt-4" />
	          </form>
	        </div>
	      </div>
	    </div>
	  </div>
    )
   }
}
Login.propTypes = {
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,

	loginUser: PropTypes.func.isRequired
}

// const mapDispatchtToProps = dispatch => (
// 	return {
// 		loginUser: () => loginUser()
// 	}
// )

const mapStateToProps = state => {
	return {
		auth: state.auth,
		errors: state.errors
	}
}


export default connect(mapStateToProps, {loginUser})(Login)

