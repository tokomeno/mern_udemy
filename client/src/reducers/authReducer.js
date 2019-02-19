import {TEST_DISPATCH, SET_CURRENT_USER} from '../actions/types'

import isEmpty from '../validation/is-empty'

const initState = {
	isAuthenticated: false,
	user:{}
}

export default function(state = initState, action){
	switch(action.type){
		case TEST_DISPATCH:
			return {
				...state,
				user: action.payload
			}
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			}

		default:
			return state
	}
}
