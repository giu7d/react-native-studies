import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import Navigation from './src/Navigation';


export default class App extends Component {


  render() {
    return (
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    );
  }
}