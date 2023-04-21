import React from 'react';
import logo from './logo.svg';
import './App.css';
import Wishlist from './components/Wishlist/Wishlist';
import Nav from './components/Nav/Nav';

import BackHeader from './components/BackHeader/BackHeader';

function App() {
  return (
    <div className="App">
      <Nav />
      <BackHeader />
      <Wishlist />
    </div>
  );
}

export default App;
