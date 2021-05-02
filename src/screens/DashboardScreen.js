import React, { Component } from "react";
import {
    View, 
    Text,
    StyleSheet,
    Image,
    SafeAreaView
} from "react-native";
import Menu from '../components/Menu';


class DashboardScreen extends Component{
    
    render(){
        const  { navigation } =  this.props;
        const user = navigation.getParam('user');
        
        return (
            <SafeAreaView style={style.container} > 
               
                    <Menu 
                        user = {user}
                    />
               
               
                    <Text>Container</Text>
               
               
                
            </SafeAreaView>
        )
    }
    
}
export default DashboardScreen;

const style = StyleSheet.create({
    container:{
        flex : 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }, 
})