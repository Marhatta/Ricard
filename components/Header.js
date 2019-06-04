import React ,{Component} from 'react';
import {Icon} from 'react-native-elements';

class Header extends Component{
    render(){
        return(
            <View style={styles.header}>

                    <View style={styles.icon}>
                        <Icon 
                        name='menu'
                        type='material'
                        size={26}
                        />
                    </View>
                    
                    <View style={styles.icon}>
                        <Icon 
                        name='search'
                        type='material'
                        size={26}
                        />
                    </View>

                </View>
        );
    }
}


const styles = {
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    icon:{
        width:50,
        marginTop:5
    }
};

export const Header;