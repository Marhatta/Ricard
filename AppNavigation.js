import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import TestScreen from './screens/TestScreen';

import React ,{Component} from 'react';
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Test: {screen: TestScreen},
});

const Navigation = createAppContainer(MainNavigator);


class AppNavigation extends Component {
    render() {
      return <Navigation />;
    }
  }
  
export default AppNavigation;