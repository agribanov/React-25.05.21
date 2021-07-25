const USERS_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';

export const ACTION_SET_USERS = 'ACTION_SET_USERS';

export const fetchUserss = () => (dispatch) => {
    fetch(USERS_URL)
        .then((res) => res.json())
        .then((data) =>
            dispatch({
                type: ACTION_SET_USERS,
                payload: data,
            })
        );
};
