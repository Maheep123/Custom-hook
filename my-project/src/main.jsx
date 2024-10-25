import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Include global styles

// Render the main App component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
