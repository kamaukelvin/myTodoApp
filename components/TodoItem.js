import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



 const TodoItem = ({item, pressHandler}) => {
    return (
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <View style={styles.item}>
            <MaterialIcons name="delete" size={20} color="#333" />
              <Text style={styles.itemText}>
            {item.text}
            </Text>
            </View>
        </TouchableOpacity>
      
    )
}


const styles = StyleSheet.create({
 item:{
     padding:16,
     marginTop: 16,
     borderColor:'#bbb',
     borderWidth:1,
     borderRadius:10,
     borderStyle:'dashed',
     flexDirection: 'row'
 },
 itemText:{
     marginLeft: 10
 }
   
  });

export default TodoItem