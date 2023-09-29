// App.tsx
import React from 'react';
import './App.css';
import DataComponent from './DataComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Datos de la API</h1>
      <DataComponent />
    </div>
  );
};

export default App;
