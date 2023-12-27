import React from "react";
import {View, Text, StyleSheet} from 'react-native';

// This is the Task component
// Given some text, it will create a task with that text
const Task = (props) => {
    return (
      <View style={styles.task}>
        <View style={styles.taskLeft}>
          <View style={styles.pin}></View>
          <Text style={styles.taskText}>{props.Text}</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    task: {
        backgroundColor: '#243447',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    taskLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    pin: {
        width: 17,
        height: 17,
        backgroundColor: '#c51f5d',
        borderColor: '#141d26',
        borderWidth: 3,
        borderRadius: 100,
        marginRight: 15,
    },
    taskText: {
        color: '#FFF',
        maxWidth: '80%',

    }
});

export default Task;