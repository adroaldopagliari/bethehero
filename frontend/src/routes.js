import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIcident from './pages/Newincident'

export default function routes() {
  return (
    <BrowserRouter>
      <Switch> //only one route
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIcident} />
      </Switch>
    </BrowserRouter>
  )
}