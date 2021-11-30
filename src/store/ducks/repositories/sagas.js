import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import { loadFailure, loadSuccess } from './actions';

export function* load() {
    try {
        const response = yield call(api.get, 'users/marcos012/repos');

        yield put(loadSuccess(response.data))
    } catch {
        yield put(loadFailure());
    }
}