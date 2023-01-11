import { all, fork } from "redux-saga/effects";
import LogisticSaga from "./logisticSaga";

export default function* rootSaga() {
  yield all([fork(LogisticSaga)]);
}
