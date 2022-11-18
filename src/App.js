import React from 'react';
import { Carousel, Destinations, Footer, Hero, Navbar, Search, Selects } from './components';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Destinations/>
      <Search/>
      <Selects/>
      <Carousel/>
      <Footer/>
    </>
  );
}

export default App;
