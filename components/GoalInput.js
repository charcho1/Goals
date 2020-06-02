import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Modal} from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState ('');
    
    function goalInputHandler (enteredText) {
        setEnteredGoal(enteredText);
        //this defines a function of GIH which we will use down below
    };

    const addGoalHandler =() => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');

    }
    return (
        <Modal visible = {props.visible} animationType="slide"> 
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}/>
            <View style={styles.buttonContainer}>
                <Button title="ADD" onPress={addGoalHandler} />
                <Button title="Cancel" color="red" onPress={props.onCancel}/>

            </View>
            
        </View>
        </Modal>
  )
}
//mmodal's visible = {props.visible} which has been passed down
//above: onpress props.onaddgoal is th eprop that was passed down

//rly dont know what this bind stuff is. 1st arg is this keyword and 2nd arg is the argument to be forwarded
const styles=StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#000000'
        //flexDirection:'column'
      },
      input: {
        width: '80%',
        borderColor: 'white',
        color:'white',
        borderWidth: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',

      }
})

export default GoalInput;