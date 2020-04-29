import React, { Component } from 'react';
import fire from '../config/Fire';
import Admin from './Admin';
import About from './About';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Nav   from './Nav';
import './Home.css'
import Gallary from './Gallary';



class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (   
        <Router>
        
        <form> 
            <div>  
                <Nav/>
                    <Switch>
                        
                        <Route   path="/About" exact component={About}/>
                        <Route   path="/Admin" exact component={Admin}/>
                        <Route   path="/Gallary" exact component={Gallary}/>
                    </Switch>
            </div>
           
          <botton onClick={this.logout} style={{marginLeft: '10px'}} class="btn btn-danger" >Logout</botton>
        </form>  
        </Router>
        
        )
    }

}

export default Home;