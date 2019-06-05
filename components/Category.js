import React,{Component} from 'react';
import {View,Dimensions,Text,TouchableOpacity} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HORIZONTAL_GUTTER = 5;
const VERTICAL_GUTTER = 5;
const CATEGORY_WIDTH = (SCREEN_WIDTH/2)-HORIZONTAL_GUTTER;

class Category extends Component{

    render(){
    const {name} = this.props;

        return(
            <View>
                <TouchableOpacity style={styles.category}>
                    <Text style={styles.text}>{name}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles={
    category:{
        width:CATEGORY_WIDTH,
        height:80,
        borderRadius:7,
        marginBottom:VERTICAL_GUTTER,
        position:'relative',
        backgroundColor:'#d32f2f',
    },
    text:{
        fontSize:22,
        position:'absolute',
        bottom:'30%',
        left:'20%',
        color:'white',
        fontWeight:'200'
    }
}

export default Category;