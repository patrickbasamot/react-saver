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
    </div>
  );
}

export default App;
