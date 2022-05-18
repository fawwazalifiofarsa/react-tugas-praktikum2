import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Event from '../pages/event';
import Gallery from '../pages/toko';
import Cart from '../pages/cart';

const Utama = () => (
    <Switch>
        <Route path="/event" component={Event} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/cart" component={Cart} />
    </Switch>
)

export default Utama;
