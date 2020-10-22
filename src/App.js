import React from 'react';
import Quoter from './components/Quoter';
import Footer from './components/Footer';
import './App.css';


//Parente component type class ES6 extending React.Component
class App extends React.Component {
  render(){ 
    return (
      <div>
        <h1>Random Quote Machine</h1>
        <Quoter />
        <Footer />
      </div>
    );
  }
};

export default App;
