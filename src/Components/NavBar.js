import React from "react";
import { useState } from "react";
function NavBar(){
    const [searchValue,setsearchValue] = useState('');
    function value(){
        console.log(searchValue);
    }
    function Search(){
        return <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" onChange={(event)=> setsearchValue(event.target.value)} aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
    }
    return(
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                 <a className="navbar-brand">Maybelline</a>
                 <Search />
                   
            </div>
      </nav>

    )
}

export default NavBar;