import React, { Component } from 'react';
import logo from './logo.svg';
import './FirstApp.css';

class FirstApp extends Component {
  render() {
    const placeholder = "React";
    return (
      // 이렇게 리턴하는 전부가 JSX
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello {placeholder}</p>
          {/*<p>*/}
            {/*Edit <code>src/App.js</code> and save to reload.*/}
          {/*</p>*/}
          {/*<a*/}
            {/*className="App-link"*/}
            {/*href="https://reactjs.org"*/}
            {/*target="_blank"*/}
            {/*rel="noopener noreferrer"*/}
          {/*>*/}
            {/*Learn React*/}
          {/*</a>*/}
        </header>
      </div>
    );
  }
}

// 이렇게 export 해주면 다른곳에서 사용 가능. e.g. index.js
export default FirstApp;
