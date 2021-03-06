import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer></ItemListContainer>
    </div>
    </>
  );
}

export default App;
