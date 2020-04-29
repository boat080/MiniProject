import  React from 'react';
import '../App.css';
import EmployeeList from './EmployeeList'
import './About.css'

function About(){

    return(
        <div class='about'>
                <div class="container">
                <br></br>
                    <h1>รายชื่อพนักงาน Part-time</h1>
                <br></br>   
                    <img src="https://scontent.fbkk2-6.fna.fbcdn.net/v/t1.0-9/51604566_319720031992427_7073272594857721856_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_eui2=AeFag6gJyhPW6ltyQxvYm4ZFZC1VCpIRLjhkLVUKkhEuOA02HxyHD-WeFzGlNhdwKSMCiEyvSuJWExaGTcVAzX_3&_nc_ohc=MerbdiQPxmcAX8ooyA0&_nc_ht=scontent.fbkk2-6.fna&oh=e3b3be26316ea30e0a9f2238cb695ce4&oe=5ECDDF3C" class="rounded-circle" alt="Cinque Terre" width = "300" height ="300"></img>
                    <br></br>    
                    <h1>บริษัท เซาเทิร์น อินฟอร์เมชั่น เทคโนโลยี จำกัด</h1>
                    <br></br>
                    <EmployeeList/>
                </div>
        </div>        
    );
}
export default About;