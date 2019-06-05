import React,{Component} from 'react';
import Header from '../components/Header'; 
import Categories from '../components/Categories'; 
import {View,Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component{

    static navigationOptions={
        tabBarIcon:<Icon name='home' size={30} color='white' />
    }

    render(){
        return(
            <View>
                <Header /> 
                 <View style={styles.textContainer}>
                    <Text style={styles.categories}>Categories</Text>
                    <TouchableOpacity style={styles.viewAll}>
                        <Text>View All</Text>
                    </TouchableOpacity>
                </View>
                <Categories />               
            </View>
        );
                
    }
}

const styles={

    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:40,

    },
    categories:{
        fontSize:28,
        fontWeight:'bold',
        color:'black',
    },
    viewAll:{
        justifyContent:'flex-end',
        marginRight:5
    }
}


export default HomeScreen;