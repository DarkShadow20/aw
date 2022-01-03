import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddContact from './Components/AddContact';
import EditContact from './Components/EditContact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

const App=()=> {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={()=><Home/>}/>
        <Route path="/add">
          <AddContact/>
        </Route>
        <Route path="/edit/:id">
          <EditContact/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
