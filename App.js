import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, SafeAreaView, StyleSheet, TextInput, ToastAndroid } from 'react-native';
import { styles } from './styles';
import {Header} from "./Components/header";
import {Weekly} from "./Components/weekly";
import {Daily} from "./Components/daily";
import {Ultimate} from "./Components/ultimate";

function App() {
  const [currentScreen, setCurrentScreen] = useState('weekly');
  let content = <Weekly/>

  switch (currentScreen) {
    case 'weekly':
      content = <Weekly />
      break;
    case 'daily':
      content = <Daily />
      break;
    case 'ultimate':
      content = <Ultimate />
      break;
  }

  console.log('currenty', currentScreen)
  return (
      <View style={styles.body}>
        <Header setCurrentScreen={setCurrentScreen} />

        {content}
      </View>
  );
}


export default App;
