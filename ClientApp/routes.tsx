import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

export default () => <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/hello' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetchdata' component={FetchData} />
        </Switch>
    </Layout>
</BrowserRouter>;

// Allow Hot Module Reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}
