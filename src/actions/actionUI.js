import { actionTypes } from './actionTypes';

export function uiConfirmOpen(user) {
    return dispatch => {
        dispatch({
            type: actionTypes.UI_CONFIRM_STATE,
            payload: {open: true, user}
        });
    }
}
export function uiConfirmClose() {
    return dispatch => {
        dispatch({
            type: actionTypes.UI_CONFIRM_STATE,
            payload: {open: false}
        });
    }
}
