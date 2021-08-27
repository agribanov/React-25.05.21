import { request } from '../../../api';

const POSTS_URI = 'posts';

export function getPosts() {
    return request({ url: POSTS_URI });
}

export function getPost(id) {
    return request({ url: `${POSTS_URI}/${id}` });
}

export function deletePost(id) {
    request({ url: `${POSTS_URI}/${id}`, method: 'DELETE' });
}
