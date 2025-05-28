import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';           // Add CSS import
import App from './App';
import reportWebVitals from './reportWebVitals';  // Add performance report

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Start measuring performance
reportWebVitals();
