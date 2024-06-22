// App.js

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlantListScreen from './screens/PlantListScreen';
import PlantDetailsScreen from './screens/PlantDetailScreen';
import {SafeAreaView} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PlantList">
          <Stack.Screen
            name="PlantList"
            component={PlantListScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PlantDetails"
            component={PlantDetailsScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
