import React from 'react';
import Product from './Components/Product';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='container-lg'>
      {/* <h1 name="patrick">Hello </h1>
      
      <Name firstName="Patrick"/> */}
      <Product />
      </div>
    </div>
  );
}

export default App;
