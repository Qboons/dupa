import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';



import Layout from './pages/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Advertisements from './pages/Advertisements';
import AddAdvertisement from './pages/AddAdvertisement';
import AddProperty from './pages/AddProperty';
import MyAdvertisements from './pages/MyAdvertisements';
import AdvertisementVeryfication from './pages/Admin/AdvertisementVeryfication';
import PersonalDetails from './pages/User/PersonalDetails';




export default class App extends Component {



  render() {
    
    return (
      <div>
      <Router history={hashHistory} >
        <Route path="/"  component={Layout} getQ={this.getQuery}>
            <IndexRoute component={About} />
            <Route path="about" component={About}></Route>
            <Route path="advertisements"  component={Advertisements}></Route>
            <Route path="addAdvertisement"  component={AddAdvertisement}></Route>
            <Route path="addProperty"  component={AddProperty}></Route>
            <Route path="myAdvertisements"  component={MyAdvertisements}></Route>
            <Route path="advertisementVeryfication"  component={AdvertisementVeryfication}></Route>
            <Route path="personalDetails"  component={PersonalDetails}></Route>
            <Route path="signIn" component={SignIn}></Route>
            <Route path="signUp" component={SignUp}></Route>
        </Route>
      </Router>
      
      </div>
    );
  }
}






