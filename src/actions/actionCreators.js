import { actionTypes } from './actionTypes';
import API from '../Api';

export function getItems() {
    return dispatch => {
        API.get('/users')
            .then(res => {
                dispatch({
                    type: actionTypes.GET_ITEMS,
                    payload: res
                })
            })
    }
}