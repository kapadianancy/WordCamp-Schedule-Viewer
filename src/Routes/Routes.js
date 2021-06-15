import React from 'react'
import { Switch, Route,withRouter } from 'react-router'
import Header from '../components/Header/Header'

function Routes (props) {
  return (
        <Switch>
            <Route path="/" component={Header} />
        </Switch>
  )
}

export default withRouter(Routes)
