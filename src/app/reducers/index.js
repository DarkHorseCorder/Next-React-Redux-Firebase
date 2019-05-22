import { combineReducers } from 'redux';
import ReducerClock from './reducer_clock';
import ReducerCounter from './reducer_counter';
import ReducerActionBar from './reducer_action_bar';

const rootReducer = combineReducers({
    clock: ReducerClock,
    counter: ReducerCounter,
    actionBar: ReducerActionBar
})

export default rootReducer;
