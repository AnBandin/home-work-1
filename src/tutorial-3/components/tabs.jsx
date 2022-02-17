import React from 'react';
import {tabs, numbers} from '../data';
import '../style.css';

export default function Tabs() {
  const [activeId, setActiveId] = React.useState(1);

  const switchTab = (id) => {
    if (id !== activeId) {
      setActiveId(id);
    } else {
      setActiveId(0);
    }
  };

  return tabs.map((tab) => (
    <div className={tab.id === activeId ? 'tab active' : 'tab'} key={tab.id}>
      <input
        id={'tab-' + numbers[tab.id]}
        type="checkbox"
        name="tabs"
        onClick={() => switchTab(tab.id)}
      />
      <label htmlFor={'tab-' + numbers[tab.id]}>{tab.title}</label>
      <div className="tab-content">
        <p>{tab.description}</p>
      </div>
    </div>
  ));
}
