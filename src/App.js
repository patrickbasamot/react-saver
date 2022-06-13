import React from 'react';
import Product from './Components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
function App() {
  return (
    <div className="App">
       <NavBar />
      <div className='container-fluid'>  
        <Product />
       </div>
       <footer className='text-center text-white bg-dark p-2'>SAVER</footer>
    </div>
  );
}

export default App;
