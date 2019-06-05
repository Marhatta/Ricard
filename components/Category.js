import React,{Component} from 'react';
import {View,Dimensions,Text} from 'react-native';
import {Image} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HORIZONTAL_GUTTER = 5;
const VERTICAL_GUTTER = 5;
const CATEGORY_WIDTH = (SCREEN_WIDTH/2)-HORIZONTAL_GUTTER;
const TEXT_BACKGROUND = '#b71c1c'; //Material design red shade palette

class Category extends Component{

    render(){
    const {name} = this.props;

        return(
            <View>
                <Image style={styles.image}
                source={require('../images/bumbro_singer.jpg')}
                />
                <View style={styles.textContainer}> 
                    <Text style={styles.text}>{name}</Text>
                </View>
            </View>
        );
    }
}

const styles={
   
    image:{
        width:CATEGORY_WIDTH,
        height:180,
        borderRadius:7,
        marginBottom:VERTICAL_GUTTER,
        position:'relative',
    },
    textContainer:{
        height:180,
        width:CATEGORY_WIDTH,
        position:'absolute',
        bottom:VERTICAL_GUTTER,
        backgroundColor:TEXT_BACKGROUND,
        borderRadius:7,
        opacity:.6
    },
    text:{
        fontSize:25,
        position:'absolute',
        bottom:0,
        color:'white',
        fontWeight:'bold'
    }

}

export default Category;