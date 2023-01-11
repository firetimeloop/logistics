import React, { useEffect } from 'react';
import { Polyline } from 'react-leaflet';
import { LatLngExpression, LatLngBoundsExpression } from 'leaflet';
import { useMap } from 'react-leaflet';

import { useAppSelector } from '../../redux/hooks';
import polylineSelector from '../../redux/selectors/polylineSelector';

const limeOptions = { color: 'lime' }

const Figures = () => {
  const map = useMap();

  const polyline = useAppSelector(polylineSelector);

  useEffect(() => {
    if (polyline) {
      map.fitBounds(polyline as LatLngBoundsExpression);
    }
  }, [map, polyline])

  return (
    <>
      {polyline && (
        <Polyline pathOptions={limeOptions} positions={polyline as LatLngExpression[] | LatLngExpression[][]} />
      )}
    </>
  );
};

export default Figures;
