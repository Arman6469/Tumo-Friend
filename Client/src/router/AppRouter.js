import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navigation from '../components/Navigation'
import App from '../components/App'
import Signin from '../components/Signin';

export default function AppRouter() {
    return (
       <BrowserRouter>
       <Navigation />
       <Switch>
           <Route exact path='/' component={App} />
           <Route path='/signin' component={Signin} />
       </Switch>
       </BrowserRouter>
    )
}
