import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './css/styles';
import {Footer} from "./Components/footer";
import {Todos} from "./Components/Todos";
import {Home} from "./Components/Home";
import {Coffee} from "./Components/Coffee";
import {Beer} from "./Components/Beer";

function App() {
  const [currentScreen, setCurrentScreen] = useState('calendar');
  let content = <Coffee/>

  switch (currentScreen) {
    case 'home':
      content = <Home/>
      break;
    case 'calendar':
      content = <Todos />
      break;
    case 'coffee':
      content = <Coffee />
      break;
    case 'beer':
      content = <Beer />
      break;
  }



  return (
      <View style={styles.mainBody}>
        {content}
        <Footer currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
      </View>
  );
}


export default App;
