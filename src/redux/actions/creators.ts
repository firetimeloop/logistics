import * as actions from "./types";

export function getTracksRequest(): actions.GetTracksRequestAction {
  return {
    type: actions.GET_TRACKS_REQUEST
  };
}

export function getTracksFailure(
  error: Error | string
): actions.GetTracksFailureAction {
  return {
    type: actions.GET_TRACKS_FAILURE,
    error
  };
}
