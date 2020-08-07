import { all, takeLatest } from 'redux-saga/effects';

import { ExampleTypes } from './example/types';

import { getExample } from './example/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(ExampleTypes.GET_EXAMPLE, getExample)]);
}
