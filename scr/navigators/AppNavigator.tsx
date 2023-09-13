import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TypeRootStackParamList} from '../interfaces /navigation';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';

const RootStack = createNativeStackNavigator<TypeRootStackParamList>();

const welcomeScreenOptions = (): NativeStackNavigationOptions => ({
  headerShown: false,
});

const mainScreenOptions = (): NativeStackNavigationOptions => ({
  headerShown: false,
});
const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="WelcomeScreen">
        <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} options={welcomeScreenOptions} />
        <RootStack.Screen name="MainScreen" component={MainScreen} options={mainScreenOptions} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
