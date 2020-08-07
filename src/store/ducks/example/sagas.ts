import { call, put } from 'redux-saga/effects';

import { ApiRoutes } from '../../../config/api/Routes';
import { Api } from '../../../services/api/Api';
import { setExample } from './actions';

export function* getExample() {
  try {
    const response = yield call(Api.get, ApiRoutes.TEST);

    yield put(setExample(response.data));
  } catch (err) {}
}
