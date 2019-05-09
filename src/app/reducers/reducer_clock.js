import {TICK} from '../actions/types';

const initialState = {
    lastUpdate:0, 
    light: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case TICK:  
            return {
                ...state,
                lastUpdate: action.ts,
                light: !!action.light
            }
        default: return state;
    }
}


/*
const updated = Object.assign({}, person, {
  location: 'Moon',
  interests: Object.assign({}, person.interests, {
    coffee: 10 // All other interests are copied
  })
});

const updated = {
  ...person,
  interests: {
    ...person.interests,
    coffee: 10,
  }
}
*/