import React from 'react';
import { StyledProvider } from './styles/StyledProvider';
import Router from './router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <StyledProvider>
      <ToastContainer />
      <Router />
    </StyledProvider>
  );
}

export default App;
