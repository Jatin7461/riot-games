import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import GameDesc from './components/GameDesc';
import Transition from './components/Transition';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/game' element={<GameDesc />} />
      </Routes>
    </BrowserRouter> */}
    <App />
    <Transition />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
