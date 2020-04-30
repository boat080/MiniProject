import React, { useEffect }  from 'react';
import EmployeeCard from './EmployeeCard'
import './EmployeeList.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'

const EmployeeList = (props)=>{
    console.log('props page: ' + props.page)
    const employees = useSelector(state => state.employee);
    const dispatch = useDispatch();
    const getEmployees = async () => {
        const result = await axios.get(`https://mini-pj-backend.herokuapp.com/api/employees`)
       
        const action = {type:'GET_EMPLOYEES',employee: result.data}
        dispatch(action)
      }
      useEffect(() => {
        getEmployees()
      }, [])
       console.log("data",employees)
      if (!employees || !employees.length)
        return (<h2>No data</h2>)

    return(
        <div >
            {
                employees.map((employee, index) => (
                    <ul key={index} style={{ margin: 5 }}>
                        <EmployeeCard  page={props.page} {...employee}  />
                    </ul>
                ))
            }
        </div>
    )


}
export default EmployeeList
