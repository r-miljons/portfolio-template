import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Layout from './components/Layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='portfolio' element={<Portfolio />} />
          <Route exact path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
