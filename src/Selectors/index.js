import _get from "lodash/get";

export const userReducer = (state) => _get(state, "user", {});
export const repoReducer = (state) => _get(state, "repo", []);

