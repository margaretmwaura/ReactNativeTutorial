import React from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const MashButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPressFunction}
      style={styles.button}
      activeOpacity={0.2}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: 200,
    borderColor: '#00ffff',
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    // flex: 1,
    backgroundColor: '#00ffff',
    height: 50,
    width: 150,
    alignItems: 'center',
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#fff',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default MashButton;
