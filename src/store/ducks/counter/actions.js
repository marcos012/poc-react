import { CounterTypes } from "./types";

export function incrementConter() {
    return {
        type: CounterTypes.INCREMENT,
    }
}

export function decrementConter() {
    return {
        type: CounterTypes.DECREMENT,
    }
}

export function getRandomNumber(data) {
    return {
        type: CounterTypes.SUCCESS_RANDOM_NUMBER,
        data,
    }
}

export function loadRandomNumber() {
    return {
        type: CounterTypes.LOAD_RANDOM_NUMBER,
    }
}

export function errorRandomNumber() {
    return {
        type: CounterTypes.ERROR_RANDOM_NUMBER,
    }
}