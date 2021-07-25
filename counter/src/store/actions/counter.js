export const ACTION_INCREMENT = 'ACTION_INCREMENT';
export function increment() {
    return { type: ACTION_INCREMENT };
}

export const ACTION_DECREMENT = 'ACTION_DECREMENT';
export function decrement() {
    return { type: ACTION_DECREMENT };
}

export const ACTION_SET = 'ACTION_SET';
export function set(payload) {
    return { type: ACTION_SET, payload };
}
