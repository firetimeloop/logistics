import React from 'react';
import './App.scss';

import Map from './components/Map';
import TracksTable from './components/TracksTable';

function App() {
  return (
    <div className="App">
      <TracksTable/>
      <Map/>
    </div>
  );
}

export default App;
