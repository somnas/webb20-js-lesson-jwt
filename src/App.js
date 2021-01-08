import React, {useState} from 'react'
import { Route, Switch } from 'react-router-dom'
import CustomerListPage from './pages/CustomerListPage'
import LoginPage from './pages/LoginPage'

function App() {
  

  

  function getMe() {
    const url = "https://frebi.willandskill.eu/api/v1/me/"
    const token = localStorage.getItem("WEBB20")
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  

  return (
    <div>
      <Switch>
        <Route path="/login">
            <LoginPage />
        </Route>
        <Route path="/customer-list">
          <CustomerListPage />
        </Route>
      </Switch>
      
      <hr/>    
    </div>
  );
}

export default App;
