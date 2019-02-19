import React, { Component } from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

import Login from './components/auth/Login';
import Register from './components/auth/Register';


import './App.css';
import {Provider} from 'react-redux'
import store from './store'


// JWT AUTH
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser, logoutUser} from './actions/authActions'



// check for token
if(localStorage.jwtToken){
  // set auth token header auth
  setAuthToken(localStorage.jwtToken)
  // set current token in redux
   const decoded = jwt_decode(localStorage.jwtToken)
   console.log(decoded)
   store.dispatch(setCurrentUser(decoded))

   // Check for expired token
   const currentTime = Date.now() / 1000
   if(decoded.exp < currentTime){
      store.dispatch(logoutUser())
      // TODO:: CLEAR CURRENT PRIFLE
      window.location.href = '/login'
   }
}

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    		<Router>
    		  <div className="App">
		        <Navbar />

		        <Route exact path="/" component={Landing}/>

		        <div className="container">
					<Route exact path="/register" component={Register}/>
		        	<Route exact path="/login" component={Login}/>
		        </div>

		        <Footer />
		      </div>
    	</Router>
    	</Provider>
    );
  }
}

export default App;
