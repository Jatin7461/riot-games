import React from 'react';
import logo from './logo.svg';
import './App.css';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage';
import GameDesc from './components/GameDesc';
import Transition from './components/Transition';
const router = createBrowserRouter([
  {
    path: '/', element: <HomePage />, children: [

    ]
  },
  { path: '/game', element: <GameDesc /> },

])
type cl = {
  class: string
}

function App() {



  return (
    // <Transition>
      <RouterProvider router={router} />
    // {/* </Transition> */}
  );
}

export default App;
