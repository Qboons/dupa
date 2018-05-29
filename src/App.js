import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { connect } from 'react-redux';


import Layout from './pages/Layout';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Home from './pages/Home';
import Advertisements from './pages/Advertisements';
import Property from './pages/Property';
import AddAdvertisement from './pages/AddAdvertisement';
import EditAdvertisement from './pages/EditAdvertisement';
import AddProperty from './pages/AddProperty';
import EditProperty from './pages/EditProperty';
import EditImages from './pages/EditImages';
import MyAdvertisements from './pages/MyAdvertisements';
import AdvertisementVeryfication from './pages/Admin/AdvertisementVeryfication';
import Users from './pages/Admin/Users';
import PropertyVeryfication from './pages/Admin/PropertyVeryfication';
import PersonalDetails from './pages/User/PersonalDetails';



 class App extends Component {
   constructor(props){
     super(props);

     this.requireAuth = this.requireAuth.bind(this);
     this.requireAdmin = this.requireAdmin.bind(this);
   }

   requireAuth(nextState, replace) {
    if (!this.props.auth.isAuthenticated) {
      replace({
        pathname: '/home'
      })
    }
  }
   requireAdmin(nextState, replace) {
    if (!this.props.auth.user.admin) {
      replace({
        pathname: '/home'
      })
    }
  }


  render() {
    console.log(this.props.auth.isAuthenticated);
    return (
      <div>
      <Router history={hashHistory} >
        <Route path="/"  component={Layout} getQ={this.getQuery}>
            <IndexRoute component={Home} />
            <Route path="signIn" component={SignIn}></Route>
            <Route path="signUp" component={SignUp}></Route>
            <Route path="about" component={About}></Route>
            <Route path="home" component={Home}></Route>
            <Route path="advertisements"  component={Advertisements}></Route>
            <Route path="property"  component={Property}></Route>
            <Route path="addAdvertisement"  component={AddAdvertisement} onEnter={this.requireAuth} ></Route>
            <Route path="editAdvertisement"  component={EditAdvertisement} onEnter={this.requireAuth}></Route>
            <Route path="addProperty"  component={AddProperty} onEnter={this.requireAuth}></Route>
            <Route path="editProperty"  component={EditProperty } onEnter={this.requireAuth}></Route>
            <Route path="editImages"  component={EditImages} onEnter={this.requireAuth}></Route>
            <Route path="myAdvertisements"  component={MyAdvertisements} onEnter={this.requireAuth}></Route>
            <Route path="personalDetails"  component={PersonalDetails} onEnter={this.requireAuth}></Route>
            <Route path="advertisementVeryfication"  component={AdvertisementVeryfication} onEnter={this.requireAdmin}></Route>
            <Route path="propertyVeryfication"  component={PropertyVeryfication} onEnter={this.requireAdmin}></Route>
            <Route path="users"  component={Users} onEnter={this.requireAdmin}></Route>
            
            
        </Route>
      </Router>
      
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state
  };
}

export default connect(mapStateToProps )(App);





