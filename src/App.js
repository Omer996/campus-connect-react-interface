import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
