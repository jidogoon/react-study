import React, {Component, Fragment} from 'react';
import logo from './logo.svg';  // 파일명은 이렇게 변수처럼
import './FirstApp.css';
import HelloComponent1 from "./components/HelloComponent";

class FirstApp extends Component {
  render() {
    function getPlaceholder() {
      return "react";
    }

    const placeholder = getPlaceholder();
    return (
      // 여기서 리턴하는 전부가 JSX
      <Fragment>
        {/*주석 이렇게 하거나*/}
        <div className="App"
          // 아니면 이렇게
          >
          <img src={logo} className="App-logo" alt="logo" />
          {/*<p>first {placeholder}</p>*/}
          <HelloComponent1 name={placeholder}/>
        </div>
      </Fragment>
    );
  }
}

// 이렇게 export 해주면 다른곳에서 사용 가능. e.g. index.js
export default FirstApp;
