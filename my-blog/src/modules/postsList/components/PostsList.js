import React from 'react';
import PostsListItem from './PostsListItem';

function PostsList({ list }) {
    return (
        <ul>
            {list.map((item) => (
                <PostsListItem key={item.id} post={item} />
            ))}
        </ul>
    );
}

export default PostsList;
