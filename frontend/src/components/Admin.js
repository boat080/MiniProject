import  React, {useState} from 'react';
import '../App.css';
import EmployeeList from './EmployeeList'
import InputForm from './InputForm'
import './Admin.css'

function Admin(){

    const [page] = useState('Admin')
    return(
        <div class='admin'>
        <br></br>
        <h1>Admin</h1>
            <EmployeeList page={page}/> 
            <div class='admin'>
            <InputForm/>
            </div> 
        </div>
    );
}
export default Admin;