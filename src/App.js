/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Node} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Drawer = createDrawerNavigator();

// for icons use drawerIcon
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ScreenB"
        drawerPosition="left"
        drawerType="front"
        hideStatusBar={true}
        overlayColor="#00000090"
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundcolor: '#0080ff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}
        drawerStyle={{
          backgroundcolor: '#00f',
        }}>
        <Drawer.Screen
          name="Screen A"
          component={ScreenA}
          options={{header: () => null, title: 'Screen A Title'}}
        />
        <Drawer.Screen
          name="Screen B"
          component={ScreenB}
          options={{header: () => null, title: 'Screen B Title'}}
          initialParams={{
            ItemName: 'Item from Drawer',
            ItemId: 12,
          }}
        />
      </Drawer.Navigator>
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
