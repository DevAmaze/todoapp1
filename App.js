import React from 
'react';
import { View, TextInput, StyleSheet, Text, Button, ScrollView } from 'react-native'

export default class App extends React.Component {
constructor(props) {
super(props);
this.state={
newTodo: '',
todos: [
{id: '001', task:'Learn React native', isDone: false},
{id: '002', task:'Anoter Task', isDone: true},
{id: '003', task:'Go to Marker', isDone: false},
{id: '004', task:'Office Meeting @10:30PM', isDone: false}
]

}
}




render(){
return(
<View style={styles.container}>
<View  style={styles.formContainer}>
<TextInput style={styles.inputArea}
value={this.state.newTodo}
onChange = {(text=>this.setState({ newTodo: text 
}))}
 />
<text style={styles.addButton}>Add</text>
</View>
<ScrollView style={styles.todosListContainer}>
{ this.state.todos.length != 0 ?
this.state.todos.map(function(todo, index){
return(
<View style={styles.todoItem} key={index}>
<Text>{todo.id}</Text>
<Text>{todo.task}</Text>
</View>
)
})

:
{this:state.todos.length ==0 &&
  <View>
<Text>No todos to show</Text>
</View>
}}
</ScrollView>
</View>
)
}
}

const styles = StyleSheet.create({
container: {
padding: 30
},

inputArea: {
borderColor: '#cccccc',
borderWidth: 1,
paddingHorizontal: 10,
paddingVertial: 5,
borderRadius:  5,
width: '80%'
},

addButton: {
addingHoriOntal: 10,
paddingVertical: 5,
backgroundColor: '#1f7fed',
borderRadius: 5,
color: '#ffffff',
width:'23%',
textAlign: 'center'
},

formContainer: {
display: 'flex',
flexDirection: 'row',
justifyContent: 'space-around'
},

todoItem: {
backgroundColor: '#f2f2f2',
marginVertical: 5,
padding: 5
},

todoListContainer: {
marginTop: 10
}
})
