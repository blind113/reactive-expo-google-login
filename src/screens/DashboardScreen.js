import { orange } from "@material-ui/core/colors";
import React, { Component } from "react";
import {
    View, 
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView
} from "react-native";
import Menu from '../components/Menu';
import Footer  from '../components/Footer';

class DashboardScreen extends Component{
    
    render(){
        const  { navigation } =  this.props;
        const user = navigation.getParam('user');
        
        return (
            <SafeAreaView style={{backgroundColor:'#f08080',flex:1}}> 
               
                <View style={style.headderView}>   
                    <Menu 
                        user = {user}
                    />
                </View>
                <View style={ style.container }>   
                    <ScrollView >
                        <Text style={style.textContainer}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.

                        </Text>
                    </ScrollView>
                </View>   
                <View>  
                    <Footer/>
                </View>         
            </SafeAreaView>
        )
    }
    
}
export default DashboardScreen;

const style = StyleSheet.create({
    container:{
        flex : 0.8,
        paddingLeft:10
    }, 
    headderView:{
        flex:0.1,
        paddingTop: Platform.OS === 'android' ? 35 : 10,
        paddingLeft: 30
    },
    textContainer:{
        fontSize:50
    },
    footerView:{
        flex:0.1,
    }
   
})