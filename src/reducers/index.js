import { combineReducers } from "redux";
import chirpsReducer from './chirps';


// globalState.chirps
const rootReducer = combineReducers({
    chirps: chirpsReducer
});

export default rootReducer;