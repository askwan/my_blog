import React from 'react';

import App from './App';
import * as serviceWorker from './serviceWorker';
import {ConfigProvider} from 'antd'
import dva from 'dva';


import zhCN from 'antd/es/locale/zh_CN'
import './asset/public/index.scss'
import './asset/style.scss'

const app = dva();

app.router(({history})=>(
  <ConfigProvider locale={zhCN}>
   <App history={history} />
 </ConfigProvider>
));

app.model(require('./models/global.js').default);

window.__app = app;
// console.log(app,'app');
app.start(document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
