import React,{Component} from 'react';
import {Text,View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class SettingsScreen extends Component{
    static navigationOptions={
        tabBarIcon:<Icon name='cog' size={30} color='white' />
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>This is settings screen</Text>
            </View> 
        );
    }
}
const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
  

export default SettingsScreen;