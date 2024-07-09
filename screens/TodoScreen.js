// src/screens/AddTodoScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { addTodo } from "../context/slice/todoSlice";

const TodoScreen = ({ navigation }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoTitle.trim() !== "") {
      dispatch(
        addTodo({
          id: Math.random().toString(),
          title: todoTitle,
          completed: false,
        })
      );
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Todo Title:</Text>
      <TextInput
        style={styles.input}
        value={todoTitle}
        onChangeText={setTodoTitle}
        placeholder="Enter todo title"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: "green",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default TodoScreen;
