import React from 'react';
import Tabs from './tabs';
import '../style.css';

export default function Accordion() {
  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FAQ</h1>
        <div className="app-tabs">
          <Tabs />
        </div>
      </div>
    </div>
  );
}
