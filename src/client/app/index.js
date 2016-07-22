import React from 'react';
import {render} from 'react-dom';
import token from './lib/token'

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));