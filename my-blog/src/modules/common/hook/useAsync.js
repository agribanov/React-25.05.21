import { useEffect, useReducer } from 'react';
import {
    loadingErrored,
    loadingSucceeded,
    reducer,
    resetLoading,
    startLoading,
} from './asyncReducer';

const DEFAULT_CONFIG = {
    autoRun: true,
};

export default function useAsync(
    asyncAction,
    dependencies = [],
    config = DEFAULT_CONFIG
) {
    const [state, dispatch] = useReducer(reducer, undefined, reducer);

    useEffect(() => {
        if (config.autoRun) {
            run();
        } else {
            dispatch(resetLoading());
        }
    }, dependencies);

    async function run() {
        dispatch(startLoading());
        try {
            const data = await asyncAction();
            dispatch(loadingSucceeded(data));
        } catch (error) {
            dispatch(loadingErrored(error));
        }
    }

    return { ...state, run };
}
