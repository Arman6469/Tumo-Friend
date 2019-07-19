import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navigation from '../components/Navigation'
import App from '../components/App'
import Signin from '../components/Signin';
import Signup from '../components/Signup';

export default function AppRouter() {
    return (
       <BrowserRouter>
       <Navigation />
       <Switch>
           <Route exact path='/' component={App} />
           <Route path='/signin' component={Signin} />
           <Route path='/signup' component={Signup} />
       </Switch>
       </BrowserRouter>
    )
}
