import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

function App() {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ userChange, setUserChange ] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log('snapsss', snapShot.data())
          setCurrentUser({id: snapShot.id, ...snapShot.data()})
        });
      } else {
        setCurrentUser(userAuth)
        console.log(userAuth)
      }
    });
    // clean up on component unmount
    return () => {
      unsubscribeFromAuth();
    }
  }, [userChange]);

  return (
    <div>
      {console.log('currentUser', currentUser)}
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
