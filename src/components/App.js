import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';
import Search from './Search';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      	<div  className="App">
      		<NavBar />
      		<Search />
      	</div>
      </MuiThemeProvider>
    );
  }
}

export default App;
