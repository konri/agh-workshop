import React from 'react';
import logo from '../../../logo.svg';
import './HomePage.css';
import { Counter } from '../Counter/Counter';

export const HomePage = () => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
    </header>
  </div>)
}
