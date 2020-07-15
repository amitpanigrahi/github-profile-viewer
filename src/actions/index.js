import {GET_USER, GET_REPOS} from "./actionTypes";
import {formattedAction} from "./helpers";

export const a__getUser = formattedAction(GET_USER);
export const a__getRepos = formattedAction(GET_REPOS);
