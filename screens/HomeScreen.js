// src/screens/HomeScreen.js

import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, completeTodo } from "../context/slice/todoSlice";

const HomeScreen = ({ navigation }) => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch todos from local storage or API
  }, []);

  const navigateToAddTodo = () => {
    navigation.navigate("AddTodo");
  };

  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <View style={styles.noItemsContainer}>
          <Ionicons name="alert-circle-outline" size={64} color="gray" />
          <Text style={styles.noItemsText}>No items added yet</Text>
        </View>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text
                style={[
                  styles.todoText,
                  item.completed && { textDecorationLine: "line-through" },
                ]}
              >
                {item.title}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(completeTodo({ id: item.id }))}
              >
                <Ionicons
                  name={item.completed ? "checkbox-outline" : "square-outline"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => dispatch(deleteTodo({ id: item.id }))}
              >
                <Ionicons name="trash-outline" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={styles.todoList}
        />
      )}

      <TouchableOpacity style={styles.addButton} onPress={navigateToAddTodo}>
        <Ionicons name="add-circle-outline" size={48} color="green" />
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 10,
  },
  noItemsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noItemsText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
    color: "gray",
  },
  todoList: {
    paddingBottom: 20,
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  todoText: {
    fontSize: 18,
    flex: 1,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default HomeScreen;
