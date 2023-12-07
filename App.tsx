import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {

  return (
    <View style={Styles.appContainer}>
      <View>
        <TextInput placeholder="Your ToDo's"/>
        <Button title="Add a ToDo"></Button>
      </View>
      <View>
        <Text>List of todo's</Text>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  appContainer:{
    padding:50,
  },

});