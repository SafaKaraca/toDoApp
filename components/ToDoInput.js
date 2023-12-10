import { StyleSheet, View, TextInput, Button } from "react-native"
import { useState } from "react";


function ToDoInput(props) {
    const [enteredToDoText, setEnteredToDoText] = useState('')

    function toDoInputHandler(enteredText) {
        setEnteredToDoText(enteredText)
    }

    function addToDoHandler() {

        props.onAddToDo(enteredToDoText)
        setEnteredToDoText('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your ToDo's"
                onChangeText={toDoInputHandler}
                value={enteredToDoText}
            />
            <Button title="Add a ToDo" onPress={addToDoHandler} />
        </View>
    )
}


export default ToDoInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        margin: 8,
        padding: 8,
    },
})