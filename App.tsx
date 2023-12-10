import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';


export default function App() {

  const [courseToDos, setCourseToDos] = useState([])




  function addToDoHandler(enteredToDoText) {
    setCourseToDos((currentCourseToDos) => [
      ...currentCourseToDos,
      { text: enteredToDoText, id: Math.random().toString() },
    ])
  }

  function deleteToDoHandler(id) {
    setCourseToDos(currentCourseToDos => {
      return currentCourseToDos.filter((toDO) => toDO.id !== id)
    })
  }

  return (
    <View style={Styles.appContainer}>
      <ToDoInput onAddToDo={addToDoHandler} />
      <View style={Styles.toDosContainer}>
        <FlatList
          data={courseToDos}
          renderItem={itemData => {
            return <ToDoItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteToDoHandler} />
          }}
          keyExtractor={(item, inddex) => {
            return item.id
          }}
          alwaysBounceVertical={false} />


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

  toDosContainer: {
    flex: 5
  },



});