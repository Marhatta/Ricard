import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import PlaylistScreen from './screens/PlaylistScreen';

import React ,{Component} from 'react';

const MainNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Search:{screen:SearchScreen},
  Playlist:{screen:PlaylistScreen},
  Settings: {screen: SettingsScreen},
},{
  initialRouteName:'Home',
  tabBarOptions:{
    activeBackgroundColor:'#1a237e', //indigo material palette
    labelStyle:{
      fontSize:12,
      color:'white'
    },
    style:{
      backgroundColor:'#01579b',//light blue material palette
      borderTopLeftRadius:15,
      borderTopRightRadius:15

    }
  },
  
});

const Navigation = createAppContainer(MainNavigator);


class AppNavigation extends Component {
    render() {
      return <Navigation />;
    }
  }
  
export default AppNavigation;