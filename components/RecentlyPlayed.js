import React,{Component} from 'react';
import {ScrollView,
        TouchableWithoutFeedback,
        Image,
        Text,
        View
        } from 'react-native';

import TrackPlayer from 'react-native-track-player';


const RecentlyPlayedList=[
    {'name':'Bumbro','id':1,'url':'../images/bumbro_singer.jpg'},
    {'name':'Maharaza Ho','id':2,'url':'../images/bumbro.jpg'},
    {'name':'Dilbaro','id':3,'url':'../images/tumbakneer.jpg'},
    {'name':'Khan Maej Koor','id':4,'url':'../images/bumbro_singer.jpg'}
];

TrackPlayer.updateOptions({
    // One of RATING_HEART, RATING_THUMBS_UP_DOWN, RATING_3_STARS, RATING_4_STARS, RATING_5_STARS, RATING_PERCENTAGE
    ratingType: TrackPlayer.RATING_HEART,
    
    // Whether the player should stop running when the app is closed on Android
    stopWithApp: false,

    // An array of media controls capabilities
    // Can contain CAPABILITY_PLAY, CAPABILITY_PAUSE, CAPABILITY_STOP, CAPABILITY_SEEK_TO,
    // CAPABILITY_SKIP_TO_NEXT, CAPABILITY_SKIP_TO_PREVIOUS, CAPABILITY_SET_RATING
    capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
    ],
    
    // An array of capabilities that will show up when the notification is in the compact form on Android
    compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP
    ]

   
});

class RecentlyPlayed extends Component{

    componentWillMount(){
        TrackPlayer.setupPlayer();
    }

    execute(){
            var track = {
            id: '123', // Must be a string, required
            url: require('../music/Yeh_Baby.mp3'), // Load media from the app bundle
            title: 'first song',
            artist: 'vishal',
            album: 'vishal album',
            genre: 'Progressive House, Electro House',
            date: '2014-05-20T07:00:00+00:00', // RFC 3339
            artwork: require('../images/bumbro_singer.jpg'), // Load artwork from the app bundle
                }
            TrackPlayer.add(track);
                TrackPlayer.play();
            
        }

    renderRecentlyPlayedList(){
        return RecentlyPlayedList.map(recent=>{
            return(
                <TouchableWithoutFeedback key={recent.id}
                onPress={this.execute}
                >
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

}

export default RecentlyPlayed;