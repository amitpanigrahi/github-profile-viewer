import {FAILURE, GET_REPOS, REQUEST, SUCCESS} from "../actions/actionTypes";

const initialArrayState = {
    data: [],
    isFetching: false,
    error: {}
};

const repo = (state = {...initialArrayState}, action) => {
    switch (action.type) {
        case GET_REPOS[REQUEST]:
            return {...state, error: {}, isFetching: true};
        case GET_REPOS[SUCCESS]:
            return {...state, error: {}, data: [...action.payload], isFetching: false};
        case GET_REPOS[FAILURE]:
            return {...state, error: {...action.payload}, isFetching: false};
        default:
            return state;
    }
};

export default repo;
