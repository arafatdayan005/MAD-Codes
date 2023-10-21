import React from "react";
import CounterPage from "./src/pages/CounterPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./src/pages/LoginPage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsPage from "./src/pages/SettingsPage";
import BasicDashboardPage from "./src/pages/BasicDashboardPage";

const stack = createStackNavigator();

const bottomTab = createBottomTabNavigator();

const BasicDashboardScreen = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Counter" component={CounterPage} />
      <stack.Screen name="Login" component={LoginPage} />
    </stack.Navigator>
  )

}

const App = () => {
  return (
    <NavigationContainer>
      <bottomTab.Navigator>
        <bottomTab.Screen name="Dashboard" component={BasicDashboardScreen} />
        <bottomTab.Screen name="Settings" component={SettingsPage} />
      </bottomTab.Navigator>
    </NavigationContainer>
  )
}

export default App;