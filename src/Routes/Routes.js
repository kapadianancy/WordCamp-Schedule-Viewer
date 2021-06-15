import React from 'react'
import {Route, Switch, withRouter} from 'react-router'
import Home from "../components/Home/Home";

function Routes(props) {
    return (
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    )
}

export default withRouter(Routes)
