import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './components/App';
import Greetings from './components/Greetings';
import SignUpPage from './components/signup/SignUpPage';

export default (
    <div>
        <Route path="/" component={App} >
            <IndexRoute components={Greetings}/>
            <Route path="signup" components={SignUpPage} />
        </Route>
        <Route path="/greetings" components={Greetings} />
    </div>

);