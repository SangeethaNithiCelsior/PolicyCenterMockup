import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';

const App = () => {
  return (
    <BrowserRouter basename="/PolicyCenterMockup">
      <AppRoutes />
    </BrowserRouter>
  );
};
export default App;