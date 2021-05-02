
import React, { Component } from "react";
import { Image,StyleSheet,Text } from 'react-native';

class Menu extends Component{
    render(){
        return (
            <>
            
            <Image 
                style={style.tinyLogo}
                source={{
                    uri: this.props.user.photoUrl
                }}
           />
           <Text>Ola, {this.props.user.name}</Text>
           </>
        )
    }
}

export default Menu;
const style = StyleSheet.create({
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius:50

    },
})