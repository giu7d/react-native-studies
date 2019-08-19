import React, { Component } from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

import Navigation from './src/Navigation';
import AppBar from './src/AppBar';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFFFF',
    accent: '#F73942',
    background: '#FFFFFF'
  }
};

export default class App extends Component {

  render() {
    return (
      <PaperProvider theme={theme}>
        <AppBar />
        <Navigation />
      </PaperProvider>
    );
  }
}