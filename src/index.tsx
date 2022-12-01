import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import './styles.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import reportWebVitals from './reportWebVitals';
import { Home, About, Dashboard, Profile, Settings, MyCars } from './components'
// import { firebaseConfig } from '.firebaseConfig';
// import 'firebase/auth';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';

const name = "Betty Boop"
const email = "betty@boop.com"

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
          <Home />
        </Route>
        <Route path='/about'>
          <About></About>
        </Route> 
        <Route path='/dashboard'>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/profile'>
          <Profile name={name} email={email}></Profile>
        </Route>
        <Route path='/settings'>
          <Settings></Settings>
        </Route>
        <Route path='/mycars'>
          <MyCars></MyCars>
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
