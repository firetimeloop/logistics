export interface TracksResponse {
  routes: Array<{
    geometry: string;
  }>;
}

const getTrackString = (track: [number, number][]) => {
  return track.map(([lat, lng]) => `${lng},${lat}`).join(';');
}

export async function fetchTracks(
  track: [number, number][]
): Promise<TracksResponse> {
  const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${getTrackString(track)}?overview=full`);
  const data: Promise<TracksResponse> = response.json()
  return data;
}
