import {
  put,
  call,
  takeEvery,
  all,
  fork,
  select,
} from "redux-saga/effects";
import { decode } from "@googlemaps/polyline-codec";

import { fetchTracks } from "../../services/logisticServices";
import * as actionCreators from "../actions/creators";
import { setTrack, setPolyline } from "../reducers/tracksSlice";
import tracksSelector from "../selectors/tracksSelector";
import { TracksResponse } from "../../services/logisticServices";

const setTrackAction = setTrack([]).type;

export function* fetchTracksSaga() {
  try {
    yield put(actionCreators.getTracksRequest());
    const track: [number, number][]  = yield select(tracksSelector);
    const { routes }: TracksResponse = yield call(fetchTracks, track);
    const polyline: [number, number][] = decode(routes[0].geometry);
    yield put(setPolyline(polyline));
  } catch (e) {
    yield put(actionCreators.getTracksFailure(e as string | Error));
  }
}

function* watchOnLoadTracks() {
  yield takeEvery(setTrackAction, fetchTracksSaga);
}

export default function* tracksSaga() {
  yield all([fork(watchOnLoadTracks)]);
}
