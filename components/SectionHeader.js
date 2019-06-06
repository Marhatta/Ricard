import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

class SectionHeader extends Component{
    render(){
        const {left,right}=this.props;
        return(
            <View style={styles.textContainer}>
                    <Text style={styles.categories}>{left}</Text>
                    <TouchableOpacity style={styles.viewAll}>
                        <Text>{right}</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}


const styles={

    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30,
        marginBottom:5

    },
    categories:{
        fontSize:28,
        fontWeight:'bold',
        color:'black',
        marginLeft:5
    },
    viewAll:{
        justifyContent:'flex-end',
        marginRight:5
    }
}


export default SectionHeader;