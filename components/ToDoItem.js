import { StyleSheet, View, Text, Pressable } from 'react-native'

function ToDoItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.todoItem}>
                <Text style={styles.todoText}>{props.text}</Text>
            </View>
        </Pressable>
    )
}

export default ToDoItem

const styles = StyleSheet.create({
    todoItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    todoText: {
        color: 'white'
    }
})