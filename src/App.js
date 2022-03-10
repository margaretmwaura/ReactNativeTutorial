/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Node} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Screen A"
          component={ScreenA}
          options={{header: () => null}}
        />
        <Tab.Screen name="Screen B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// MaterialBottomTabNavgator

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     margin: 10,
//   },
// });

export default App;
