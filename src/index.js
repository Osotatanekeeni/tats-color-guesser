import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ColorGuesserGame from './ColorGuesserGame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ColorGuesserGame />
  </React.StrictMode>
);
