import React, {useState} from 'react';
import {Node} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

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

export default ScreenB;
