// src/navigation/AppNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import TodoScreen from "../screens/TodoScreen";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Todo App" }}
      />
      <Stack.Screen
        name="AddTodo"
        component={TodoScreen}
        options={{ title: "Add Todo" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
