import { combineReducers } from 'redux'

import mainReducer from './mainReducer'
import uiReducer from './uiReducer'

export default combineReducers({
	mainReducer,
	uiReducer,
})