import {combineReducers} from 'redux';
import user from "./user";
import repo from "./repo";

const rootReducer = combineReducers({
    user,
    repo
});

export default rootReducer;
