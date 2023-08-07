import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from '@react-navigation/stack';
import Onboard from "./components/Onboard";
import Login from "./components/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        // headerShown: false
      }}>
        <Stack.Screen name="Home" component={Onboard} />
        <Stack.Screen name="About" component={Login} options={{
          title: 'About',
          ...TransitionPresets.ModalSlideFromBottomIOS,
          ...TransitionPresets.RevealFromBottomAndroid
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
