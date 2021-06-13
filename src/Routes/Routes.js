import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Header/Header'

function Routes (props) {
  return (
        <Switch>
            <Route path="/" component={Header} />
        </Switch>
  )
}

export default Routes
