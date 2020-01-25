import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View,FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from "./components/Header"
import TodoItem from './components/TodoItem';
import AddTodos from './components/AddTodos';

export default function App() {
  const [todos,setTodos]= useState([
  {text: 'Buy coffee', key:'1'},
  {text: 'Make an app', key:'2'},
  {text: 'read a book', key:'3'},
  {text: 'do blah blah', key:'4'}
  ])

// function to delete todo when pressed
const pressHandler=(key)=>{
  setTodos((prevTodos)=>{
    return(
      prevTodos.filter(todo=>todo.key != key)
    )
  })
}
  // function to add new todos in array
  const submitHandler=(text)=>{

    // if statement to help in validation of user input to ensure characters typed are more than 3
     if (text.length>3){
      setTodos((prevTodos)=>{
        return(
      
          [{text: text, key: Math.random().toString()}, ...prevTodos]
        )
      })
     }else{
      //  if characters are less than three, we display an alert
      // The Alert object comes with the alert method which takes in three parameters:
      // 1.The title of the alert as a string, the message as a string and an array which will have an object(s) that will act as buttons

      Alert.alert('OOPS', 'Todos must be over three characters', [
        {text: 'understood', onPress:()=>console.log('this is an alert')}
      ])
     }
 
  }
  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodos submitHandler={submitHandler}/>
          <View style={styles.list}>
              <FlatList
                        data={todos}
                        renderItem={({item})=>{
                          return(
                        <TodoItem item={item} pressHandler={pressHandler}/>
                          )
                        }}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content:{
    flex:1,
    padding: 40
  },
  list:{
    flex:1,
    marginTop:20
  }
 
});
