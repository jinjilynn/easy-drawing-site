import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './notfound';
import Welcome from './welcome';
import style from './home.less';

function Home(props) {
        return <div className={style['home-container']}>
            <Welcome />
            <Route  path='*' component={NotFound} />
        </div>
    
}

export default Home;