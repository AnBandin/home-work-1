import React from 'react';
import {Footer} from './components/Footer';

import {Header} from './components/Header';
import RouterOutlet from './services/routing';

function App() {
  return (
    <>
      <Header />
      <RouterOutlet />
      <Footer />
    </>
  );
}

export default App;
