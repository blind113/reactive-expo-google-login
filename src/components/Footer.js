
import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text,  TouchableOpacity } from 'react-native'; 
const DATA=[
    {
        id:'botao1',
        title:'Lista'
    },
    {
        id:'botao2',
        title:'Adicionar'
    },
    {
        id:'botao3',
        title:'Previsão'
    },
    {
        id:'botao4',
        title:'Botão 4'
    },
    {
        id:'botao5',
        title:'Botão 5'
    },
    {
        id:'botao6',
        title:'Botão 6'
    },
    {
        id:'botao7',
        title:'Botão 7'
    },
    {
        id:'botao8',
        title:'Botão 8' 
    }
]
const renderItem = ({ item }) => (
    <Item title={item.title} />
    
);
const Item = ({ title }) => (
    <View style={styles.item}>
        <TouchableOpacity
           style={styles.botoesFooter}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    </View>
);
class Footer extends Component{
    
    render(){
        return (
            
            <FlatList 
                horizontal
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
            />
            
        )
    }
}
const styles = StyleSheet.create({
    item: {
      backgroundColor:'rgba(100, 80, 200, 1.0)',
      padding: 1,
      marginVertical: 10,
      marginHorizontal: 16,
      width:100,
      height:100
    },
    title: {
      fontSize: 10,
    },
    botoesFooter:{
        width:98,
        height:98,
        alignItems:'center',
        padding:10
    }
 
  });

export default Footer;