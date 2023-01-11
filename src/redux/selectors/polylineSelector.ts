import { RootState } from "../store";

export const polylineSelector = (state: RootState) => state.tracks.polyline;

export default polylineSelector;
