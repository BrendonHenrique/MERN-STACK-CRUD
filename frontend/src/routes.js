import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

// import Main from './pages/main'
import UsersPainel from './pages/UsersPainel'
// import Product from './pages/product'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={UsersPainel}></Route>
            {/* <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} /> */}
        </Switch>
    </BrowserRouter>
);

export default Routes;
