import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import initStore from './stores/Stores';

import CarDetail from './containers/CarDetail/CarDetail';
import Cars from './containers/Cars/Cars';

import './styles/app.scss';

const store = initStore();

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/:id" render={props =>
                <CarDetail carsStore={store.carsStore} {...props}/>}
            />
            <Route path="/" render={props => <Cars carsStore={store.carsStore} {...props}/>}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
