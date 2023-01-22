import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../screens/Onboarding";
import HomeScreen from "../screens/HomeScreen";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: "",
          contentStyle: { backgroundColor: "#fff" },
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
