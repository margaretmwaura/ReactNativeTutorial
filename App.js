/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {Node} from 'react';
import {
  Alert,
  Button,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [name, setName] = useState('Maggie');
  const [submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    if (name.length < 3) {
      Alert.alert('Error', 'Enter a proper name', [
        {
          text: 'OK',
          onPress: () => {
            console.log('We killing it');
          },
        },
      ]);
      // ToastAndroid.showWithGravityAndOffset;
      ToastAndroid.show('Enter a proper name', ToastAndroid.SHORT);
    } else {
      setSubmitted(!submitted);
    }
  };

  return (
    <View style={styles.body}>
      <Text>Please write your name</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="write your name hunny"
        onChangeText={value => setName(value)}
        // secureTextEntry
      />

      {/* <Button title={submitted ? 'clear' : 'Submit'} onPress={onPressHandler} /> */}

      {/* TouchableWithoutFeedback */}
      <TouchableOpacity
        onPress={onPressHandler}
        style={styles.button}
        activeOpacity={0.2}>
        <Text>{submitted ? 'clear' : 'Submit'}</Text>
      </TouchableOpacity>

      {submitted ? <Text>Your name is {name}</Text> : null}
    </View>
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
});

export default App;
