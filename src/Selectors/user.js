import _get from "lodash/get";
import {userReducer} from "./index";
const default_image = "https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg";

export const userImage = (state) => {
    return (
        _get(userReducerData(state), "avatar_url", default_image)
    )
};

export const userReducerData = (state) =>  _get(userReducer(state), "data");
export const isUserFetching = (state) =>  _get(userReducer(state), "isFetching");

export const userErrorMessage = (state) => {
    return (
        _get(userReducer(state), "error.message", "")
    )
};
