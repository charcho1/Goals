import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
//Touchableopacity makes objects touchable by wrapping around them
const GoalItem = props => {
    return (
        <TouchableOpacity onPress ={props.onDelete.bind(this,props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
      //TO onpress props delete was passed down from apps.js
      //we receive args in the form of props, and create a new prop called title
      //within goalitem
    )
}
const styles=StyleSheet.create({
    listItem: {
        padding:10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        margin:10,
      
      },
})

export default GoalItem;