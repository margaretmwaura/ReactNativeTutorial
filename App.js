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
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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

  const [name, setName] = useState('mash');

  const onClickHandler = () => {
    setName('Programming with Mash');
  };

  return (
    // <NavigationContainer>
    //   <SafeAreaView style={backgroundStyle}>
    //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={backgroundStyle}>
    //       {/* <Header /> */}
    <View
      // style={{
      //   backgroundColor: isDarkMode ? Colors.black : Colors.white,
      // }}>
      style={styles.body}>
      <View style={styles.view1}>
        <Text> My name is {name}</Text>
        <Text>1</Text>
        <Button title="change state yess" onPress={onClickHandler} />
      </View>
      <View style={styles.view2}>
        <Text> My name is {name}</Text>
        <Text>2</Text>
        <Button title="change state yess" onPress={onClickHandler} />
      </View>
      <View style={styles.view3}>
        <Text> My name is {name}</Text>
        <Text>3</Text>
        <Button title="change state yess" onPress={onClickHandler} />
      </View>
      {/* <Section title="Step One">
              Edit <Text style={styles.highlight}>App.js</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks /> */}
    </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    // flex: 1,
    width: 200,
    height: 200,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    width: 200,
    height: 200,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    width: 200,
    height: 200,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
