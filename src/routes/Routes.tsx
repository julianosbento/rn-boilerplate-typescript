import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import ExampleScreen from '../screens/Example/Example';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <>
      {/* <StatusBar style='auto' /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Example' component={ExampleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default React.memo(Routes);
