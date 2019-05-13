import { actionTypes } from './actionTypes';
import API from '../Api';

export function getUsers() {
    return dispatch => {
        API.get('/users')
            .then(res => {
                dispatch({
                    type: actionTypes.GET_USERS,
                    payload: res
                })
            })
    }
}
export function deleteUser(id) {
    return dispatch => {
        API.delete('/users')
            .then(res => {
                dispatch({
                    type: actionTypes.DELETE_USER,
                    payload: id
                })
            })
    }
}

