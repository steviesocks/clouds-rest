import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndRegisterPage from './pages/sign-in-and-register/sign-in-and-register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

function App(props) {
  // const [ currentUser, setCurrentUser ] = useState(null);
  const { setCurrentUser } = props;
  const [ userChange, setUserChange ] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id, 
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
    // clean up on component unmount
    return () => {
      unsubscribeFromAuth();
    }
  }, [userChange]);

  return (
    <div>
      {/* {console.log('currentUser', currentUser)} */}
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact='/signin' render={() => props.currentUser ? (<Redirect to='/' />) : (<SignInAndRegisterPage />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
