
import React, { Component } from "react";
import { StyleSheet,Text, View } from 'react-native';

class Menu extends Component{
    render(){
        return (
            
            <Text style={style.textUser} >{this.props.user.name}</Text>
            
        )
    }
}

export default Menu;
const style = StyleSheet.create({
   
    textUser:{
        color:'white',
        fontStyle:"italic",
        fontWeight:"bold",
        fontSize:25,
       
        
    }
})