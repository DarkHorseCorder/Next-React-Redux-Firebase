import {INCREMENT, DECREMENT, RESET} from '../actions/types';

const initialState = {
    count:0
}

export default function(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case RESET:
            return {
                ...state,
                count: initialState.count
            }
        default: return state;
    }
}
