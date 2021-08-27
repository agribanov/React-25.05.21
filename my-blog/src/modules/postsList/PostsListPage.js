import React from 'react';
import Page from '../common/components/page/Page';
import PageContent from '../common/components/page/PageContent';
import PageHeading from '../common/components/page/PageHeading';
import PostsList from './components/PostsList';
import { usePostsList } from './hooks/usePostsList';

function PostsListPage() {
    const { list, isLoading, isError } = usePostsList();
    return (
        <Page>
            <PageHeading>Posts list</PageHeading>
            <PageContent>
                {isLoading ? (
                    'loading...'
                ) : isError ? (
                    'Error'
                ) : (
                    <PostsList list={list} />
                )}
            </PageContent>
        </Page>
    );
}

export default PostsListPage;
