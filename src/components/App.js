import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout.js'
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import BadgeEdit from '../pages/BadgeEdit';
import NotFound from '../pages/NotFound';
import Main from '../pages/Main';
import BadgeDetails from '../pages/BadgeDetails';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route exact path="/badges/:badgeId" component={BadgeDetails}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;