import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import './styles.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import reportWebVitals from './reportWebVitals';
import { Home, About, Cars, Account, Profile, Settings } from './components'
// import { firebaseConfig } from '.firebaseConfig';
// import 'firebase/auth';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';

const image = "img src='assets/road-trip.jpg' className='img-fluid w-100' alt='...'"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}> */}
    <Router>
      <Switch>
        <Route exact path="/">
          <Home image={image}/>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route> 
        <Route path='/account'>
          <Account></Account>
        </Route>
        <Route path='/profile'>
          <Profile></Profile>
        </Route>
        <Route path='/settings'>
          <Settings></Settings>
        </Route>
        <Route path='/saved-cars'>
          <Cars></Cars>
        </Route>
      </Switch>
    </Router>
    {/* </Provider>}
    </FirebaseAppProvider>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
