import { RootState } from "../store";

export const tracksSelector = (state: RootState) => state.tracks.tracks;

export default tracksSelector;
