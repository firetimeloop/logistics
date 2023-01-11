import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/rootSaga";
import tracksReducer from './reducers/tracksSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
  middleware: [ sagaMiddleware ]
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
