import React from 'react';
import { useParams } from 'react-router';
import Page from '../common/components/page/Page';
import PageContent from '../common/components/page/PageContent';
import PageHeading from '../common/components/page/PageHeading';
import PostDetails from './components/PostDetails';
import usePostDetails from './hooks/usePostDetails';

function PostDetailsPage() {
    const { id } = useParams();

    const { details, deletePost, isLoading, isError } = usePostDetails(id);

    return (
        <Page>
            {isLoading ? (
                'loading...'
            ) : isError ? (
                'Error'
            ) : (
                <>
                    <PageHeading>{details.title}</PageHeading>
                    <PageContent>
                        <PostDetails body={details.body} />
                        <button onClick={deletePost}>Delete</button>
                    </PageContent>
                </>
            )}
        </Page>
    );
}

export default PostDetailsPage;
