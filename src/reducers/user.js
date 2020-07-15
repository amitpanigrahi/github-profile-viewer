import {FAILURE, GET_USER, REQUEST, SUCCESS} from "../actions/actionTypes";

const initialObjState = {
    data: {},
    isFetching: false,
    error: {}
};

const user = (state = {...initialObjState}, action) => {
    switch (action.type) {
        case GET_USER[REQUEST]:
            return {...state, error: {}, isFetching: true};
        case GET_USER[SUCCESS]:
            return {...state, error: {}, data: {...action.payload}, isFetching: false};
        case GET_USER[FAILURE]:
            return {...state, error: {...action.payload}, isFetching: false};
        default:
            return state;
    }
};

export default user;
