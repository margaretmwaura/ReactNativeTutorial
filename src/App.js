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
  Image,
  ImageBackground,
  Modal,
  Pressable,
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
import MashButton from './CustomButton';

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
  const [showWarning, setShowWarning] = useState(false);

  const onPressHandler = () => {
    if (name.length < 3) {
      // Alert.alert('Error', 'Enter a proper name', [
      //   {
      //     text: 'OK',
      //     onPress: () => {
      //       console.log('We killing it');
      //     },
      //   },
      // ]);
      // // ToastAndroid.showWithGravityAndOffset;
      // ToastAndroid.show('Enter a proper name', ToastAndroid.SHORT);
      setShowWarning(true);
    } else {
      setSubmitted(!submitted);
    }
  };

  return (
    // <ImageBackground source={require('./assets/error.png')} style={styles.body}>
    <View style={styles.body}>
      <Modal
        // transparent

        visible={showWarning}
        onRequestClose={() => {
          setShowWarning(false);
        }}
        animationType="slide">
        <View style={styles.centered_view}>
          <View style={styles.warning_modal}>
            <Text>The text must be longer than 3 words</Text>
            <Pressable onPress={() => setShowWarning(false)}>
              <Text>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text>Please write your name</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="write your name hunny"
        onChangeText={value => setName(value)}
        secureTextEntry
      />
      {/* <Button title={submitted ? 'clear' : 'Submit'} onPress={onPressHandler} /> */}
      {/* TouchableWithoutFeedback */}
      <MashButton
        onPressFunction={onPressHandler}
        title={submitted ? 'clear' : 'Submit'}
        color={'#0089'}
      />
      {submitted ? <Text>Your name is {name}</Text> : null}

      <Image
        source={require('../assets/error.png')}
        style={styles.image}
        resizeMode="stretch"
      />
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

export default App;
