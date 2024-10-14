import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Vizit } from './components/vizitPage/vizitpage';

import Component from './components/pup/Component';



function App  () {

  return (
    <div className="App">
<BrowserRouter>
      <Routes>
      <Route path="/welcomepage" element={<Component />}/>
        <Route path="visitpage" element={<Vizit/>}/>
        </Routes>
      </BrowserRouter>
      

    </div>
  )
}

export default App;
