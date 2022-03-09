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
  FlatList,
  RefreshControl,
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

  const [Items, setItems] = useState([
    {
      // key: '1',
      item: 'item1',
    },
    {
      // key: '2',
      item: 'item2',
    },
    {
      // key: '3',
      item: 'item3',
    },
    {
      // key: '4',
      item: 'item4',
    },
    {
      // key: '5',
      item: 'item5',
    },
    {
      // key: '6',
      item: 'item6',
    },
    {
      // key: '7',
      item: 'item7',
    },
    {
      // key: '8',
      item: 'item8',
    },
    {
      // key: '9',
      item: 'item9',
    },
    {
      // key: '10',
      item: 'item10',
    },
  ]);

  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    // setItems([...Items, {key: Items.siz, item: '66'}]);
    setRefresh(false);
  };
  return (
    <FlatList
      // horizontal
      // inverted
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      data={Items}
      renderItem={({item}) => (
        <View style={styles.item1}>
          <Text>{item.item}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={onRefresh}
          colors={['00ffff']}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item1: {
    // flex: 1,
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
