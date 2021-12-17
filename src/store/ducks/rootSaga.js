import { all, takeLatest } from "redux-saga/effects";
import { randomNumber } from "./counter/sagas";
import { CounterTypes } from "./counter/types";
import { load } from './repositories/sagas';
import { RepositoriesTypes } from "./repositories/types";

export default function* rootSaga() {

    console.log('opa');

    // Toda ver que a action de load for chamada, vai chamar o load do SAGA
    return yield all([
        takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
        takeLatest(CounterTypes.LOAD_RANDOM_NUMBER, randomNumber),
    ]);
};