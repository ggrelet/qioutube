import { takeLatest, call, select, put } from 'redux-saga/effects';
import { requestYouTubeSearch } from './api';
import { requestSearchSuccess } from './actions';

function* search() {
  const query = yield select((state) => state.search.query);
  const response = yield call(requestYouTubeSearch, query);
  const items = response.data.items;
  yield put(requestSearchSuccess(items));
}

function* searchFlow() {
  yield takeLatest('REQUEST_SEARCH', search);
}

export default searchFlow;
