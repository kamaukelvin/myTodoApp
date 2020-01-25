import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';



 const AddTodos = ({submitHandler}) => {

    //  state here
    const [text, setText]= useState('')



    //  keep track of what user types

     const changeHandler=(val)=>{
         setText(val);
     }
    return (
        <View>
              <Text> New Todo </Text>
              <TextInput
                        style={styles.input}
                        placeholder='add a new to do here'
                        onChangeText={changeHandler}/>
                <Button onPress={()=>submitHandler(text)} title='add todo' color='coral'/>
        </View>
      
    )
}


const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
   
  });

export default AddTodos