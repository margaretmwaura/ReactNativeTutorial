import React, {useState} from 'react';
import {Node} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCounter} from './redux/actions';

function CounterApp() {
  const {counter} = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.body}>
      <Text style={styles.text}>On Counter Screen</Text>

      <View
        style={{
          flexDirection: 'row',
          width: 200,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={() => dispatch(setCounter(4))}>
          <Text style={{fontSize: 20}}>Increase</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>{counter}</Text>
        <TouchableOpacity onPress={() => dispatch(setCounter(1))}>
          <Text style={{fontSize: 20}}>Decrease</Text>
        </TouchableOpacity>
      </View>
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

export default CounterApp;
