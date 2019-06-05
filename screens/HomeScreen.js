import React,{Component} from 'react';
import Header from '../components/Header'; 
import Categories from '../components/Categories'; 
import SectionHeader from '../components/SectionHeader';
import RecentlyPlayed from '../components/RecentlyPlayed';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component{

    static navigationOptions={
        tabBarIcon:<Icon name='home' size={30} color='white' />
    }

    render(){
        return(
            <ScrollView>
                <Header /> 
                <SectionHeader left='Recently Played' right='View all' />
                <RecentlyPlayed />
                 <SectionHeader left='Categories' right='View All' />
                <Categories />               
            </ScrollView>
        );
                
    }
}



export default HomeScreen;