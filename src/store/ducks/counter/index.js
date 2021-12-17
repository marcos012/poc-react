import { CounterTypes } from "./types";

const INITIAL_STATE = { count: 0 };

export default function counter(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CounterTypes.INCREMENT:
            return { ...state, count: state.count + 1 };

        case CounterTypes.DECREMENT:
            return { ...state, count: state.count - 1 };

        case CounterTypes.SUCCESS_RANDOM_NUMBER:
            return { ...state, count: action.data };

        default:
            return state;
    }
}