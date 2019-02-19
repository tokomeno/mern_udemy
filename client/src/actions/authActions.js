import axios from 'axios'
import {TEST_DISPATCH} from './types'
import {GET_ERRORS, SET_CURRENT_USER} from './types'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

// export const registerUser = userData => {
// 	return{
// 		type: TEST_DISPATCH,
// 		payload: userData
// 	}
// }



export const loginUser = (userData) => dispatch => {
	axios.post('/api/users/login', userData)
	.then(res => {
		const { token } = res.data
		localStorage.setItem('jwtToken', token)

		// set token header
		setAuthToken(token)

		// decode token to get user data
		const decoded = jwt_decode(token)
		// set current user
		dispatch(setCurrentUser(decoded))

	})
	.catch(err => {
		 dispatch({
		 	type: GET_ERRORS,
		 	payload: err.response.data
		 })
	})
}


// Set logged in user
export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded
	}
}

export const registerUser = (userData, history) => dispatch => {
	axios.post('/api/users/register', userData)
		.then(res => history.push('/login') )
		.catch(err => {
			console.log(err)
			 dispatch({
			 	type: GET_ERRORS,
			 	payload: err.response.data
			 })
		})
}


export const logoutUser = () => dispatch => {
	localStorage.removeItem('jwtToken')
	//Remove auth header for future requests
	setAuthToken(false)
	// set curretn user {}
	dispatch(setCurrentUser({}))
}


