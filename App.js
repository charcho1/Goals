import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"
import Emoji from 'react-native-emoji';



const goal =()=>{
    const [courseGoals,setCourseGoals] = useState('');
    const [isAddMode, setIsAddMode]= useState(false);
    //we define IAM and SIAM above, where SIAM changes the IAM initial state is false

    const addGoalHandler =(goalTitle) => {
        setCourseGoals (currentGoals => 
          [...courseGoals, {id: Math.random().toString(), value:goalTitle}]);
        //this is a spread operator which takes existing array (aka course goals) 
        //and adds this to a new element (aka goalTitle)
        //key: a number is geenrated for each key and then converted to string
        //course goals is an array where each element has a key and a value now
        //elements are then fed into 
        setIsAddMode(false); //after you add goal, make modal false
      }
      const removeGoalHandler=goalId=>{
        setCourseGoals(currentGoals => {
          return currentGoals.filter((goal)=>goal.id!==goalId);
        })
      }
      const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
      }

 

//filter: returns a new array after passing an old array thru a filter (currentgoals)
//The filter: on every goal, we check whether goal.id matches goal id. if match, we want to get rid of the blog post
//so it will run true and we will dro the entry
return (
  <View style={styles.header}>
      <View style={styles.addGoal}>
        <Text style={styles.text}>#goals</Text>
        <Emoji name="pray" style={{fontSize:50}}/>
        <Button 
          title = "Add New Goal" 
          onPress ={() => setIsAddMode(true)}/>
      </View>
      <GoalInput visible = {isAddMode} onAddGoal = {addGoalHandler} onCancel={cancelGoalAdditionHandler}  />
      <Text style={{color: '#fffaf0'}}>Click on the goal to delete</Text>
    <FlatList 
      data={courseGoals} 
      renderItem={itemData=>(
        <GoalItem 
          id={itemData.item.id} 
          onDelete= {removeGoalHandler} 
          title={itemData.item.value}/>

    )}/>


  </View>
  //button: on pres, SIAM defined above becomes true!
  //we deifne and pass the visible prop to the value of isAddMode and pass it down to goalinput
  
  //GoalInput: we define and pass down a prop called onAddGoal to the child
    //received via Button title="ADD" onPress={props.onAddGoal}

  //scrollview isnt good for long long lists. Use flatlist instead
      //this above takes the coursegoals array and creates a new one
      //data in FL: array which will be outputted as an array
      //renderitem: takes a function which is called for every item in data and returns something
          //this is now on goalitem.js
          //in goalitem, we define the title as itemdata.item.value key
          //we also pass in itemData.item.id into the id of goalitem, which lets us use removegoalhandelr
          //recall we add id to each item back up here: {id: Math.random().toString(),

  );
}

const styles = StyleSheet.create({
screen: {
  padding: 50
},

header: {
  width:'100%',
  height:'100%',
  paddingTop:36,
  backgroundColor:'#000000',
  alignItems: 'center',
  justifyContent: 'center',
  opacity:1
},

addGoal: {
  width: '80%',
  alignItems: 'center',
  justifyContent: 'center',
  flex:10

},

text: {
  fontSize:30,
  fontWeight: 'bold',
  color: '#fffaf0',


}




});

export default goal