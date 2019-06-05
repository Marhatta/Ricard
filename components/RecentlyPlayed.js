import React,{Component} from 'react';
import {ScrollView,TouchableWithoutFeedback,Image,Text,View} from 'react-native';

const RecentlyPlayedList=[
    {'name':'Bumbro','id':1,'url':'../images/bumbro_singer.jpg'},
    {'name':'Maharaza Ho','id':2,'url':'../images/bumbro.jpg'},
    {'name':'Dilbaro','id':3,'url':'../images/tumbakneer.jpg'},
    {'name':'Khan Maej Koor','id':4,'url':'../images/bumbro_singer.jpg'}
];

class RecentlyPlayed extends Component{
    renderRecentlyPlayedList(){
        return RecentlyPlayedList.map(recent=>{
            return(
                <TouchableWithoutFeedback key={recent.id}>
                    <View>
                        <Image
                        style={styles.image}
                        source={require('../images/bumbro.jpg')} 
                        />
                        <Text style={styles.text}>{recent.name}</Text>
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
            style={styles.horizontalScroll}
            >
                {this.renderRecentlyPlayedList()}
            </ScrollView>
            
        );
    }
}


const styles={
    image:{
        width:100,
        height:100,
        borderRadius:5,
        marginLeft:10
    },
    text:{
        color:'black',
        fontSize:15,
        marginLeft:10,
        textAlign:'center'
    },
    horizontalScroll:{
        marginTop:5
    }
}

export default RecentlyPlayed;