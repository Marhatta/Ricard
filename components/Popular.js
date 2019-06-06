import React,{Component} from 'react';
import {ScrollView,Text,TouchableWithoutFeedback,View,Image} from 'react-native';

const PopularList=[
    {'name':'Bumbro','id':1,'url':'../images/bumbro_singer.jpg'},
    {'name':'Maharaza Ho','id':2,'url':'../images/bumbro.jpg'},
    {'name':'Dilbaro','id':3,'url':'../images/tumbakneer.jpg'},
    {'name':'Khan Maej Koor','id':4,'url':'../images/bumbro_singer.jpg'}
];

class Popular extends Component{

    renderPopular(){
        return PopularList.map(popular=>{
            return(
            <TouchableWithoutFeedback
            key={popular.id}
            >
             <View>
                <Image
                style={styles.image}
                source={require('../images/tumbakneer.jpg')} 
                 />
                <Text style={styles.text}>{popular.name}</Text>
            </View>
            </TouchableWithoutFeedback>
            );
         });
        
    }

    render(){

        return(
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >     
                {this.renderPopular()}               
            </ScrollView>
        );
            
    }
}

const styles={
    image:{
        width:220,
        height:130,
        borderRadius:5,
        marginLeft:10
    },
    text:{
        color:'black',
        fontSize:15,
        marginLeft:10,
        textAlign:'center'
    },
}

export default Popular;