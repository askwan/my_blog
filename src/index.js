import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ConfigProvider} from 'antd'

import zhCN from 'antd/es/locale/zh_CN'
import './asset/public/index.scss'
import './asset/style.scss'

ReactDOM.render(<ConfigProvider locale={zhCN}>
  <App />
</ConfigProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
