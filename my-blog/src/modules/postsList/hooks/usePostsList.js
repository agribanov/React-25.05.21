import { useEffect, useState } from 'react';
import useAsync from '../../common/hook/useAsync';
import { getPosts } from '../../common/services/posts';

export function usePostsList() {
    const { data, run, ...rest } = useAsync(getPosts);

    return { list: data, fetchList: run, ...rest };
}
