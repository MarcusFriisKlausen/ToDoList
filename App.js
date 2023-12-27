import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleCreateTask = () => {
    console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const removeTask = (taskIndex) => {
    let tasksCopy = [... taskItems];
    tasksCopy.splice(taskIndex, 1);
    setTaskItems(tasksCopy);
  }

  return (
    <View style={styles.container}>

      {/*Wrapper for ToDo Tasks*/}
      <View style={styles.taskWrapper}>
        <Text style={styles.viewTitle}>To Do List</Text>

        <View style={styles.tasks}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => removeTask(index)}>
                  <Task Text={item}/>
                </TouchableOpacity>
              )
            })
          }
        </View>

      </View>

      {/*Wrapper for creating ToDo Tasks*/}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.createTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Create new task...'} value={task} onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleCreateTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141d26',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  viewTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
  },
  tasks: {
    marginTop: 30,
    
  },
  createTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#b3b3b3',
    borderRadius: 60,
    borderColor: '#FFF',
    borderWidth: 2,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#c51f5d',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 2,
  },
  addText: {

  },
});
