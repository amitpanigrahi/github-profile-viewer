import {createRequestTypes} from "./helpers";

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const GET_USER = createRequestTypes('GET_USER');
export const GET_REPOS = createRequestTypes('GET_REPOS');
export const GET_USER_AND_REPOS = createRequestTypes('GET_USER_AND_REPOS');
