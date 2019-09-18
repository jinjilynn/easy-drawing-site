import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dynamic } from 'dva-react-hook';
import Menu from '../config/menu.js';
import Welcome from './welcome';
import NotFound from './notfound';
import Layout from './layout';
import style from './home.less';

function Home(props) {
    return <div className={style['home-container']}>
        <Welcome />
        <Layout menu={Menu}>
            <Switch>
                {
                    Menu.map(it => {
                        return <Route key={it.path} path={it.path} render={props => <Dynamic component={it.component} {...props} children={it.children} models={it.models} />} />
                    })
                }
                <Route path='/*' component={NotFound} />} />
                    </Switch>
        </Layout>
    </div>
}

export default Home;