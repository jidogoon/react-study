import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstApp from './FirstApp';
import * as serviceWorker from './serviceWorker';

// index.html 의 root element 찾아서 거기에 렌더링.
// 근데 index.html을 찾게되는건 누가 해주는건가...?
// root element를 찾지 못하면 안
ReactDOM.render(<FirstApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
