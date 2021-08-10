import api from '../../../api';

export function getUsersList() {
    return api.get('users').then((res) => res.data);
}

export function getUserDetails(id) {
    return api.get('users/' + id).then((res) => res.data);
}
