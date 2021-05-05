import React, { Component } from "react";
import {
    View, 
    Text,
    StyleSheet,
    Button
} from "react-native";


import * as Google from 'expo-google-app-auth';

class LoginScreen extends Component{
    
  signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '828413958147-d42baojv1bkqkb4mku4jcbc7b7dbk0vv.apps.googleusercontent.com',
        iosClientId: '828413958147-2o6hgcvjk0json4o6e1skkq36feah6pf.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        
        this.props.navigation.navigate('DashboardScreen',{
            user : result.user
        });
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
    render(){
        return (
            <View style={style.container}> 
                <Button 
                    title ="Conta Google" 
                    onPress = {()=> this.signInWithGoogleAsync()}
                    style={style.button}
                />
            </View>
        )
    }
    
}
export default LoginScreen;

const style = StyleSheet.create({
    container:{
      backgroundColor: 'orange',
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center'
    },
    button:{
      width:'10',
      backgroundColor: 'red',
    }
})