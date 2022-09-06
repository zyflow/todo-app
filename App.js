import React  from 'react';
import {Home} from "./Components/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ServiceView} from "./Components/ServiceView";
import { Provider as PaperProvider } from 'react-native-paper';

function App() {
  const Stack = createNativeStackNavigator();

  return (
      <PaperProvider>
          <NavigationContainer>
              <Stack.Navigator  initialRouteName="Home">
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Item" component={ServiceView} options={({ route }) => {
                      return ({title: route.params.title});
                  }} />
              </Stack.Navigator>
          </NavigationContainer>
      </PaperProvider>
  );
}


export default App;
