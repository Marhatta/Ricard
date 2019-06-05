import React ,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,Dimensions,Text} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Header extends Component{
    render(){
        return(
            <View style={styles.header}>

                    <View>
                       <Text style={styles.logo}>Ricard</Text>
                    </View>
                    
                    <View style={styles.icons}>
                        <View style={styles.icon}>
                        <Icon 
                        name='bars'
                        size={30}
                        />
                        </View>
                    </View>
             </View>
        );
    }
}


const styles = {
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    icons:{
        flexDirection:'row',
        justifyContent:'flex-end',  
        marginTop:7 
    },
    logo:{
        fontSize:25
    },
    icon:{
        fontSize:25,
        marginRight:15,
        fontWeight:'100'
    }
};

export default Header;