import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirstApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
