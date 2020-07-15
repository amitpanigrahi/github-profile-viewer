import _get from "lodash/get";
import {repoReducer} from "./index";

export const repoReducerData = (state) =>  _get(repoReducer(state), "data");
