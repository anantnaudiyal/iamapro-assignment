import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Stay from './Component/Stay';
import Luxury from './pages/Luxury/Luxury';
import Packages from './Component/Packages';
import Fitness from './Component/Fitness';
import Exceptional from './Component/Exceptional';
import Restaurant from './Component/Restaurant';
import Company from './Component/Company';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <Homepage/>
      <Stay/>
      <Luxury />
      <Packages/>
      <Fitness />
      <Exceptional />
      <Restaurant />
      <Company />
      <Footer />
    </div>
  );
}

export default App;
