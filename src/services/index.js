import {a__getRepos, a__getUser} from "../actions";

export const fetchUserAndRepo = dispatch => userName => {
    dispatch(a__getUser.request());
    fetch(`https://api.github.com/users/${userName}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(profile => {
            if (profile && profile.message !== "Not Found") {
                dispatch(a__getUser.success(profile));
                fetch(`https://api.github.com/users/${userName}/repos`)
                    .then(data => data.json())
                    .then(data => {
                        dispatch(a__getRepos.success(data));
                    });
            }
            else {
                dispatch(a__getUser.failure({message: `Oops!!! We tried but '${userName}' seems to be missing!!!`}));
            }
        })
        .catch(err => {
            dispatch(a__getUser.failure({message: "Engineers are on typing mode now."}));
        })
};
