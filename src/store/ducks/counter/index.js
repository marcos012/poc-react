import { CounterTypes } from "./types";

const INITIAL_STATE = { count: 0, error: false, loading: false };

export default function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CounterTypes.INCREMENT:
            return { ...state, count: state.count + 1 };

        case CounterTypes.DECREMENT:
            return { ...state, count: state.count - 1 };

        case CounterTypes.SUCCESS_RANDOM_NUMBER:
            return { ...state, count: action.data };

        case CounterTypes.ERROR_RANDOM_NUMBER:
            return { ...state, error: true, loading: false };

        case CounterTypes.LOAD_RANDOM_NUMBER:
            return { ...state, error: false, loading: true };

        default:
            return state;
    }
}