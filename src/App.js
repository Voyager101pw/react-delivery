import React from 'react';
import { Header, Catigories } from './components';

function App() {
  return (
    <div className='App'>
        <Header />
        <div className="filters">
          <Catigories />
          {/* <SortPopup /> */}
        </div>
    </div>
  );
}

export default App;
