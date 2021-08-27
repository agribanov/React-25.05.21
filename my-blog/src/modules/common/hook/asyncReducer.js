const initialState = {
    isLoading: true,
    error: null,
    data: null,
};

const START_LOADING_ACTION = 'START_LOADING_ACTION';
export function startLoading() {
    return { type: START_LOADING_ACTION };
}

const LOADING_SUCCEEDED_ACTION = 'LOADING_SUCCEEDED_ACTION';
export function loadingSucceeded(payload) {
    return { type: LOADING_SUCCEEDED_ACTION, payload };
}

const LOADING_ERRORED_ACTION = 'LOADING_ERRORED_ACTION';
export function loadingErrored(payload) {
    return { type: LOADING_ERRORED_ACTION, payload };
}

const RESET_LOADING = 'RESET_LOADING';
export function resetLoading() {
    return { type: RESET_LOADING };
}

export function reducer(state = initialState, { type, payload } = {}) {
    console.log('reducer fired', type);
    switch (type) {
        case RESET_LOADING:
            return { ...state, isLoading: false };
        case START_LOADING_ACTION:
            return { ...state, isLoading: true, error: null };
        case LOADING_SUCCEEDED_ACTION:
            return { ...state, isLoading: false, error: null, data: payload };
        case LOADING_ERRORED_ACTION:
            return { ...state, isLoading: false, error: payload, data: null };
        default:
            return state;
    }
}
