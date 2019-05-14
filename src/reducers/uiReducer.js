import { actionTypes } from '../actions'

const InitialState = {
    open: false,
}

export const uiReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.UI_CONFIRM_STATE:
            return {
                ...state, 
                openConfirm: action.payload.open,
                message: 'Delete user [' + (action.payload.user ? action.payload.user.name : '') + ']?',
                user: action.payload.user
            }
        
        case actionTypes.UI_MODAL_STATE:
            return {
                ...state, 
                openModal: action.payload.open,
                user: action.payload.user
            }
        
        default:
            break
    }
    return state
}

export default uiReducer