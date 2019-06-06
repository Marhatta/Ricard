import React,{Component} from 'react';
import {ScrollView,TouchableWithoutFeedback,Text,Image,View} from 'react-native';

const PopularArtistsList=[
    {'name':'Vishal','id':1,'url':'../images/bumbro_singer.jpg'},
    {'name':'Rohan','id':2,'url':'../images/bumbro.jpg'},
    {'name':'Akash','id':3,'url':'../images/tumbakneer.jpg'},
    {'name':'Astha','id':4,'url':'../images/bumbro_singer.jpg'}
];


class PopularArtists extends Component{

    renderPopularArtists(){
        return PopularArtistsList.map(artist=>{
            return(
                <TouchableWithoutFeedback
                key={artist.id}
                >
                    <View>
                        <Image
                        style={styles.image}
                         source={require('../images/bumbro_singer.jpg')} 
                        />
                        <Text style={styles.text}>{artist.name}</Text>
                    </View>
                    
                </TouchableWithoutFeedback>
            );
        })
    }

    render(){
        return(
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            >
                {this.renderPopularArtists()}
            </ScrollView>
        );
    }
}

const styles={
    image:{
        width:100,
        height:100,
        borderRadius:50,
        marginLeft:10
    },
    text:{
        color:'black',
        textAlign:'center',
        marginBottom:30//temporary margin
    }
}

export default PopularArtists;