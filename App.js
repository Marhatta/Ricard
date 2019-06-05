/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppNavigation from './AppNavigation';
import {Text,View} from 'react-native';
import HomeScreen from './screens/HomeScreen';

class App extends Component{
  render() {
    return (
         <AppNavigation />
    );
  }
}


export default App;