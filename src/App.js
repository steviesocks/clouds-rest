import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth } from './firebase/firebase.utils';

function App() {
  const [ currentUser, setcurrentUser ] = useState(null);
  const [ userChange, setUserChange ] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setcurrentUser(user);
      console.log(user);
    });

    // clean up on component unmount
    return () => {
      unsubscribeFromAuth();
    }
  }, [userChange]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndRegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
