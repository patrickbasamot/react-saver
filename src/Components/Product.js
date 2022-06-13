import React, {useEffect,useState} from "react";
// import Image from 'react-bootstrap/Image'

function Product(props){

    //States  
    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

 useEffect(()=>{
  async function fetchData(){
  const url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
   setProducts(data);
   setLoading(false);
  }
  fetchData();
     },[])  
 
// const changeEvent = event =>{
//   setValue(event.target.value);
// }


function Buffer(){
  return(
    <img className="img-fluid img-thumbnail w-100" src="https://http.cat/102" alt="Processing"/>
    
    // <Image width="100%" height="100vh" src="https://http.cat/102" alt="Processing" thumbnail="true" fluid="true"></Image>
  )
}

function Item(props){
  return(
    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-xs-1">
    {
    products.map((item, i) => {
       return(
        <div className="d-md-flex justify-content-center p-3 flex-wrap" key={item.id}>
          <div className="d-flex justify-content-center">
             <img className="img-thumbnail" src={item.image_link} alt={item.name}/>
               <div className="d-flex flex-column align-items-center justify-content-center ms-3" >
                  <h5 className="fs-5 text-justify" >{item.name}</h5>
             <a className="btn btn-danger align-self-center" href={item.product_link}>Check Product</a>
             {/* <button type="button" className="btn btn-danger align-self-center" href={item.product_link}>Check Product</button> */}
                </div>
          </div>
        </div>
      
          )
        }
      )
    }
        </div>
  
  )
}

function BufferProduct(){
  return(
    <div >
      {loading ? <Buffer /> : <Item /> }
      </div>
  )
}
   
return(
    <div >
      <BufferProduct />
      </div>
  )
}

export default Product