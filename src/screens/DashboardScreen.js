import React, { Component } from "react";
import {
    View, 
    StyleSheet,
    SafeAreaView,
    ScrollView
} from "react-native";
import Menu from '../components/Menu';
import Footer  from '../components/Footer';
import ListaDashboard from "../components/ListaDashboard";

class DashboardScreen extends Component{
    
    render(){
        const  { navigation } =  this.props;
        const user = navigation.getParam('user');
        
        return (
            <SafeAreaView style={{backgroundColor:'rgba(100, 80, 255, 1.0)',flex:1}}> 
               
                <View style={style.headderView}>   
                    <Menu 
                        user = {user}
                    />
                </View>
                <View style={ style.container }>   
                    <ScrollView >
                        <ListaDashboard />
                    </ScrollView>
                </View>   
                <View style={style.footerView}>  
                    <Footer/>
                </View >         
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
        flex:0.2,
    }
   
})