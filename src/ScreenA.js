import React, {useState} from 'react';
import {Node} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import CounterApp from './CounterApp';

function ScreenA({navigation, route}) {
  return (
    <View style={styles.body}>
      {/* <Text style={styles.text}>On Screen A</Text> */}
      {/* <Pressable
        onPress={onPressHandler}
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Get the last user</Text>
      </Pressable> */}
      {/* <Text style={styles.text}>{route.params?.message}</Text>
        <Text style={styles.text}>{name}</Text> */}
      <CounterApp />
    </View>
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

export default ScreenA;
