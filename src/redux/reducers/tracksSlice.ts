import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  tracks: [number, number][];
  polyline: null | [number, number][];
}

const initialState: CounterState = {
  tracks: [],
  polyline: null,
};

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<[number, number][]>) => {
      state.tracks = action.payload;
    },
    setPolyline: (state, action: PayloadAction<[number, number][]>) => {
      state.polyline = action.payload;
    }
  }
});

export const { setTrack, setPolyline } = tracksSlice.actions;

export default tracksSlice.reducer;
