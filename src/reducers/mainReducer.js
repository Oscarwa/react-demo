import { actionTypes } from '../actions'

const InitialState = {
    items: [],
}

export const mainReducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ITEMS:
            return {
                ...state, 
                items: action.payload.data,
                loading: false,
            }
        case actionTypes.POST_ITEM:{
            let newData = state.items.slice();
            newData.push(action.payload.data.data);
            return {
                ...state, items: newData    
            }
        }
        case actionTypes.DELETE_ITEM:{
            return {
                ...state, items: state.items.filter(us=>{
                    return parseInt(us.id) !== parseInt(action.payload)
                })
            }
        }
        case actionTypes.UPDATE_ITEM: {
            return {
                ...state, items: state.items.map((value) => {
                    if(value.id === action.payload.id)
                        return action.payload;

                    return value;
                })
            }
        }
        
        default:
            break
    }
    return state
}

export default mainReducer