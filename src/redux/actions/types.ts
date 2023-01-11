export const GET_TRACKS_REQUEST = "tracks/getTracksRequest";
export interface GetTracksRequestAction {
  type: typeof GET_TRACKS_REQUEST;
}

export const GET_TRACKS_FAILURE = "tracks/getTracksFailure";
export interface GetTracksFailureAction {
  type: typeof GET_TRACKS_FAILURE;
  error: Error | string;
}

export type LyricsAction =
  | GetTracksRequestAction
  | GetTracksFailureAction;
