import React from 'react';
import {
  TileLayer,
  MapContainer,
} from 'react-leaflet';

import Figures from '../Figures';

import './Map.scss';

const Map = () => {
    return (
      <div className='Map'>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Figures/>
        </MapContainer>
      </div>
    );
};

export default Map;
