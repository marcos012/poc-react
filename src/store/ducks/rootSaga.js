import { all, takeLatest } from "redux-saga/effects";
import { load } from './repositories/sagas';
import { RepositoriesTypes } from "./repositories/types";

export default function* rootSaga() {

    // Toda ver que a action de load for chamada, vai chamar o load do SAGA
    return yield all([
        takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
    ]);
};