import useAsync from '../../common/hook/useAsync';
import { deletePost, getPost } from '../../common/services/posts';

export default function usePostDetails(id) {
    const {
        data,
        run,
        isLoading: isDetailsLoading,
        ...rest
    } = useAsync(() => getPost(id), [id]);

    const {
        run: runDeletePost,
        isLoading: isDeleteLoading,
        isError: isDeleteError,
    } = useAsync(() => deletePost(id), [], {
        autoRun: false,
    });

    return {
        details: data,
        fetchDetails: run,
        deletePost: runDeletePost,
        isLoading: isDetailsLoading || isDeleteLoading,
        ...rest,
    };
}
