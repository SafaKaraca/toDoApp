import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import { useState } from "react";

export default function App() {

  const [enteredToDoText, setEnteredToDoText] = useState('')
  const [courseToDos, setCourseToDos] = useState([])


  function toDoInputHandler(enteredText) {
    setEnteredToDoText(enteredText)

  }

  function addToDoHandler() {
    setCourseToDos((currentCourseToDos) => [...currentCourseToDos, enteredToDoText,])
  }

  return (
    <View style={Styles.appContainer}>
      <View style={Styles.inputContainer}>
        <TextInput style={Styles.textInput} placeholder="Your ToDo's" onChangeText={toDoInputHandler} />
        <Button title="Add a ToDo" onPress={addToDoHandler}></Button>
      </View>
      <View style={Styles.toDosContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseToDos.map((todo) => (
            <View key={todo} style={Styles.todoItem}>
              <Text style={Styles.todoText} >{todo}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
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
  toDosContainer: {
    flex: 5
  },
  todoItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  todoText: {
    color: 'white'
  }


});