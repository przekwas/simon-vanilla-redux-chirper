import { ADD_CHIRP } from '../actions/types';

// globalState.chirps.list
const initialState = {
    list: ['wow',  'wtf', 'bbq'],
    herp: 'derp'
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_CHIRP:
            return { ...state, list: [...state.list, action.payload] }
        default:
            return state;
    }
}