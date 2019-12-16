import React from 'react';

import { Route, HashRouter, Switch, Redirect, NavLink, Link } from 'dva/router';
import {Button} from 'antd'
import Home from './pages/home/Home'
import Admin from './pages/admin/Admin';

function App({history}) {
  const pathTo = pathname =>{
    history.push(pathname);
  }
  return (
    <>
      <Button onClick={()=>pathTo('/')}>home</Button>
      <Button onClick={()=>pathTo('/admin')}>admin</Button>
      <HashRouter>
        <Switch>
          <Route path='/admin' component={Admin} />
          <Route path='/home' component={Home} />
          <Redirect from='/' to='/home' />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
