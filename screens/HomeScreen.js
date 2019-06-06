import React,{Component} from 'react';
import Header from '../components/Header'; 
import Categories from '../components/Categories'; 
import SectionHeader from '../components/SectionHeader';
import RecentlyPlayed from '../components/RecentlyPlayed';
import Popular from '../components/Popular';
import PopularArtists from '../components/PopularAtrists';

import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component{

    static navigationOptions={
        tabBarIcon:<Icon name='home' size={30} color='white' />
    }

    render(){
        return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header /> 
                <SectionHeader left='Recently Played' right='View all' />
                <RecentlyPlayed />
                 <SectionHeader left='Categories' right='View All' />
                <Categories /> 
                <SectionHeader left='Most Popular' right='View All' />
                <Popular />  
                <SectionHeader left='Artists' right='View All'/>  
                <PopularArtists />          
            </ScrollView>
        );
                
    }
}



export default HomeScreen;