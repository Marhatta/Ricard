import React,{Component} from 'react';
import {View} from 'react-native';
import Category from './Category';

const categoryList=[
    {'name':'Mehendirat','id':1,'url':'../images/bumbro_singer.jpg'},
    {'name':'Devgon','id':2,'url':'../images/bumbro.jpg'},
    {'name':'Baraat','id':3,'url':'../images/tumbakneer.jpg'},
    {'name':'Mekhal','id':4,'url':'../images/bumbro_singer.jpg'}
];


class Categories extends Component{

    renderCategories(){
        return categoryList.map(category=>{
            return(
                <Category
                name={category.name}
                key={category.id} 
                />
            );
        });
    }

    render(){
        return(
            <View style={styles.container}>
                {this.renderCategories()}
            </View>
        );
    }
}


const styles={
    container:{
        marginTop:5,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
    },

}
export default Categories;