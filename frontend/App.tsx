import React from "react";
import { View, Text  } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Colors } from "./src/styles";

import Garage from "./src/screens/Garage";
import DetailsVehicle from "./src/screens/Details";

import { store } from './src/app/store'
import { Provider } from 'react-redux'


const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <Provider store={store}>
    <NavigationContainer>
    
      <StatusBar style="auto" />
    <Stack.Navigator initialRouteName="Garage">
        <Stack.Screen  name="Garage" component={Garage} />
        <Stack.Screen  name="Details" component={DetailsVehicle} />
      </Stack.Navigator>


  </NavigationContainer>
  </Provider>
  );
}

