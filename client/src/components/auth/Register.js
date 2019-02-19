import React, { Component } from 'react';
import axios from 'axios'
import classnames from 'classnames'

import {connect} from 'react-redux'
import {registerUser} from '../../actions/authActions'

import PropTypes from 'prop-types'

import {withRouter} from 'react-router-dom'
import TextFieldGroup from '../common/TextFieldGroup'
// import axios from 'axios'

class Register extends Component {
	constructor(){
		super();
		this.state = {
			name: '',
			email:'',
			password:'',
			password2:'',
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
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
		}
		console.log(newUser)
    this.props.registerUser(newUser, this.props.history)
	}

  // componentWillReceiveProps(nextProps){
  //   if(nextProps.errors){
  //     this.setState({errors: nextProps.errors})
  //   }
  // }
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
  }

  render() {
  	// const { errors } = this.state
    const {errors} = this.props
    return (
  <div className="register">
  {this.props.auth.user ? this.props.auth.user.name : null}
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Sign Up</h1>
          <p className="lead text-center">Create your DevConnector account</p>
          <form  onSubmit={this.onSubmit}>

          <TextFieldGroup
          placeholder="Name"
          onChange={this.onChange}
          value={this.state.name}
          name="name"
          error={errors.name}
          />

          <TextFieldGroup
          placeholder="Email Address"
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.onChange}
          error={errors.email}
          info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
          />

          <TextFieldGroup
          type="password"
          placeholder="Password"
          onChange={this.onChange}
          value={this.state.password}
          name="password"
          error={errors.password}
          />

          <TextFieldGroup
          type="password"
          placeholder="Confirm Password"
          onChange={this.onChange}
          value={this.state.password2}
          name="password2"
          error={errors.password2}
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
Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      registerUser: (data, history) => dispatch(registerUser(data, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register))

