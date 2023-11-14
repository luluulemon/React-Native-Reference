import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"
import { useState } from 'react';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('')
    // useState('') -> initializes enteredGoalText with empty string
    // enteredGoalText -> the state variable itself
    // setEnteredGoalText -> function used to update value of the state variable
  
    function goalInputHandler(enteredText){   // set value of the state variable from input onChange
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    console.log("test input")

    return (
        <Modal visible={props.visible}  animationType="slide">
            <View style={styles.inputContainer}> 
                
                <TextInput style={styles.textInput}
                    placeholder='Your course goal!' 
                    onChangeText={goalInputHandler}  
                    value={enteredGoalText}
                />

                <Button title='Add Goal' onPress={addGoalHandler}/>
            </View>
        </Modal>
    
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
      },
      textInput: {
        borderWidth: 1,
        width: '70%',
        marginRight: 8,
        padding: 5
      },
})
