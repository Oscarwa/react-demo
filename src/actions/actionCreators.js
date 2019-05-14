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
export function postUser(user) {
    return dispatch => {
        return API.post('/users', user)
            .then(res => {
                dispatch({
                    type: actionTypes.POST_USER,
                    payload: res
                })
            })
    }
}
export function updateUser(user) {
    return dispatch => {
        return API.put('/users', user)
            .then(res => {
                dispatch({
                    type: actionTypes.UPDATE_USER,
                    payload: user
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

