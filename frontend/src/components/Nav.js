import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav(){

    const navStyle ={
        color: 'white'
    };

    return(
        <nav >
            <h1>Soutern Infomation Technology</h1>
            
                <Link  to="/About">
                    <h4 class="btn btn-danger">Employees</h4>
                </Link>
                <Link style={navStyle} to="/Admin">
                    <h4 class="btn btn-danger">Admin</h4>
                </Link>
                <Link style={navStyle} to="/Gallary">
                    <h4 class="btn danger">Gallary</h4>
                </Link>
   
        </nav>
    );
}
export default Nav;
