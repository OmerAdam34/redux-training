import Home from './pages/Home';
import React from 'react';
import ImageSlide from './pages/ImageSlide';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/imageslideshow" element={<ImageSlide />} />
    </Routes>
  );
}

export default App;
