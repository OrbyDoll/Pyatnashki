import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="table">
      <div className="d-row">
        <div className="d-col">
          <div className="d-col-inner">1</div>
          <div className="d-col-inner">5</div>
          <div className="d-col-inner">9</div>
          <div className="d-col-inner">13</div>
        </div>
      </div>
      <div className="d-row">
        <div className="d-col">
          <div className="d-col-inner">2</div>
          <div className="d-col-inner">6</div>
          <div className="d-col-inner">10</div>
          <div className="d-col-inner">14</div>
        </div>
      </div>
      <div className="d-row">
        <div className="d-col">
          <div className="d-col-inner">3</div>
          <div className="d-col-inner">7</div>
          <div className="d-col-inner">11</div>
          <div className="d-col-inner">15</div>
        </div>
      </div>
      <div className="d-row">
        <div className="d-col">
          <div className="d-col-inner">4</div>
          <div className="d-col-inner">8</div>
          <div className="d-col-inner">16</div>
        </div>
      </div>
    </div>
  );
}

export default App;
