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
                    <h4 class="btn btn-danger">ตารางทำงานและพนักงาน</h4>
                </Link>
                <Link style={navStyle} to="/Admin">
                    <h4 class="btn btn-danger">Admin</h4>
                </Link>
                <Link style={navStyle} to="/Home">
                    <h4 class="btn danger">Logout</h4>
                </Link>
   
        </nav>
    );
}
export default Nav;
