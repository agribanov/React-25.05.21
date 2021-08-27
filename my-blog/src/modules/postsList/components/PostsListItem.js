import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function PostsListItem({ post }) {
    const { url } = useRouteMatch();
    return (
        <li>
            <Link to={`${url}${post.id}`}>{post.title} </Link>
        </li>
    );
}

export default PostsListItem;
