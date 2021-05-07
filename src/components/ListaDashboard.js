import React, { Component } from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    }
  ];
const renderItem = ({ item }) => (
    <Item title={item.title} />
);
const Item = ({ title }) => (
    <View style={styles.item}>
        <TouchableOpacity>
            <Text>{title}</Text>
        </TouchableOpacity>
    </View>
  );

class ListaDashboard extends Component{
    render(){
        return(
            
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            
        )
    }
};
const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
  


export default ListaDashboard;