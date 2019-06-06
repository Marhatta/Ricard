import React ,{Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,Image} from 'react-native';


class Header extends Component{
    render(){
        return(
            <View style={styles.header}>

                   <Image
                    style={styles.logo}
                    source={require('../images/logo.jpg')} 
                    />
                    
                    {/* <View style={styles.icons}>
                        <View style={styles.icon}>
                        <Icon 
                        name='bars'
                        size={30}
                        />
                        </View>
                    </View> */}
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
    logo:{
        marginTop:5,
        marginLeft:5
    },
    icons:{
        flexDirection:'row',
        justifyContent:'flex-end',  
        marginTop:7 
    },
    icon:{
        fontSize:25,
        marginRight:15,
        fontWeight:'100'
    }
};

export default Header;