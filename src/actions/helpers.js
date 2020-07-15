import {REQUEST, SUCCESS, FAILURE} from "./actionTypes";

export const createRequestTypes = base => {
    return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`;
        return acc;
    }, {});
};

const action = (type, payload = {}) => {
    return { type, ...payload };
};

export const formattedAction = (actionType) => ({
    request: (payload) => action(actionType[REQUEST], {payload}),
    success: (payload) => action(actionType[SUCCESS], {payload}),
    failure: (payload) => action(actionType[FAILURE], {payload}),
});
