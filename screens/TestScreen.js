import React,{Component} from 'react';
import {Text,View} from 'react-native';


class TestScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>This is test screen</Text>
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
  

export default TestScreen;