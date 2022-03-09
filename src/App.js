/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Node} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const Stack = createStackNavigator();

function ScreenA({navigation}) {
  const onPressHandler = () => {
    navigation.replace('Screen B');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>On Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to screen B </Text>
      </Pressable>
    </View>
  );
}

function ScreenB({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen A');
    // navigation.goBack();
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>On Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to screen A </Text>
      </Pressable>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen A"
          component={ScreenA}
          options={{header: () => null}}
        />
        <Stack.Screen name="Screen B" component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
