import React from 'react';
import './InputForm.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const InputForm = props => {
    const dispatch = useDispatch();
    const form = useSelector(state => state.form)
    const employees = useSelector(state => state.employee)

    const addEmployee = async () => {
        await axios.post(`http://localhost/api/employees`, form)
        dispatch({
            type: 'ADD_EMPLOYEE', employee: {
                no: employees.length > 0 ? employees[employees.length-1].no+1 : 0,
                ...form
            }
        })
    }

    
    return (
    <div className ="input">
            <div class="input2">
            <table>
                <h1>Add employees</h1>
                    {form.name} {form.surname} {form.day} {form.tel} {form.mail} 
                        
                            <tbody>
                                <tr> 
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })}    
                                        placeholder="Name"/>
                                    </td>
                                </tr>
                                <tr> 
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_SURNAME', surname: e.target.value })}
                                        placeholder="Surname"/>  
                                    </td>
                                </tr>
                                <tr> 
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_DAY', day: e.target.value })}
                                        placeholder="Work/Day"/>   
                                    </td>
                                </tr>
                                <tr>
                        
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_TEL', tel: e.target.value })}
                                        placeholder="Tel"/>   
                                    </td>
                                </tr>
                                <tr>
                        
                                    <td>
                                        <input className='inpt'
                                        type="text"
                                        onChange={(e) => dispatch({ type: 'CHANGE_MAIL', mail: e.target.value })}
                                        placeholder="Email"/>   
                                    </td>
                                </tr>
                                <tr>
                        
                                    <td>
                                        <button className='btn' onClick ={addEmployee}>CREATE</button>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            
            
      </div>
    )
}

export default InputForm