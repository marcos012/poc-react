import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFailure, loadSuccess } from './actions';

export function* load(data) {
    console.log(data);
    try {
        const response = yield call(api.get, data.url);

        yield put(loadSuccess(response.data))
    } catch {
        yield put(loadFailure());
    }
}