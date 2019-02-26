import axios from 'axios'

import {GET_PROFILES, GET_PROFILE, PROFILE_LOADING, SET_CURRENT_USER, GET_ERRORS, CLEAR_CURRENT_PROFILE} from './types'

// import setAuthToken from '../utils/setAuthToken'
// import jwt_decode from 'jwt-decode'

export const getCurrentProfile = () => dispatch => {
	dispatch(setProfileLoading)
	axios.get('/api/profile')
		.then(res => {
			dispatch({
				type: GET_PROFILE,
				payload: res.data
			})
		})
		.catch(err => {
			dispatch({
				type:GET_PROFILE,
				payload:{}
			})
		})
}

export const setProfileLoading = () => {
	return {
		type: PROFILE_LOADING
	}
}

export const clearCurrentProfile = () => {
	return {
		type: CLEAR_CURRENT_PROFILE
	}
}

export const createProfile = (profileData, history) => dispatch => {
	axios
		.post('api/profile', profileData)
		.then(res => history.push('/dashboard'))
		.catch(err => {
			dispatch({
				type:GET_ERRORS,
				payload:err.response.data
			})
		})
}


export const deleteAcount = () => dispatch => {
	if(window.confirm('are sure?')){
		axios.delete('/api/profile')
			.then(res => {
				dispatch({
					type:SET_CURRENT_USER,
					payload: {}
				})
			})
			.catch(err => {
				dispatch({
					type:GET_ERRORS,
					payload:err.response.data
				})
			})
	}
}



export const addExperiance = (data, history) => dispatch => {
	axios.post('/api/profile/experience', data)
	.then(res => history.push('/dashboard'))
	.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload:err.response.data
		})
	})
}

export const addEducation = (data, history) => dispatch => {
	axios.post('/api/profile/education', data)
	.then(res => history.push('/dashboard'))
	.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload:err.response.data
		})
	})
}

export const deleteExperiance = (id, history) => dispatch => {
	axios.delete('/api/profile/experience/' + id)
	.then(res => {
		dispatch({
			type: GET_PROFILE,
			payload: res.data
		})
	})
	.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload:err.response.data
		})
	})
}

export const deleteEducation = (id, history) => dispatch => {
	axios.delete('/api/profile/education/' + id)
	.then(res => {
		dispatch({
			type: GET_PROFILE,
			payload: res.data
		})
	})
	.catch(err => {
		dispatch({
			type: GET_ERRORS,
			payload:err.response.data
		})
	})
}



export const getProfiles = () => dispatch => {
	dispatch(setProfileLoading())
	axios.get('/api/profile/all/')
	.then(res => {
		dispatch({
			type: GET_PROFILES,
			payload: res.data
		})
	})
	.catch(err => {
		dispatch({
			type: GET_PROFILES,
			payload: null
		})
	})
}




export const getProfileByHandle = (handle) => dispatch => {
	dispatch(setProfileLoading())
	axios.get('/api/profile/handle/'+handle)
	.then(res => {
		dispatch({
			type: GET_PROFILE,
			payload: res.data
		})
	})
	.catch(err => {
		dispatch({
			type: GET_PROFILE,
			payload: null
		})
	})
}



