import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TypeRootStackParamList} from '../interfaces /navigation';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import ForecastScreen from '../screens/ForecastScreen';

const RootStack = createNativeStackNavigator<TypeRootStackParamList>();

const welcomeScreenOptions = (): NativeStackNavigationOptions => ({
  headerShown: false,
});

const homeScreenOptions = (): NativeStackNavigationOptions => ({
  headerShown: false,
});

const forecastScreenOptions = (): NativeStackNavigationOptions => ({
  headerShown: false,
});

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="WelcomeScreen">
        <RootStack.Screen name="WelcomeScreen" component={WelcomeScreen} options={welcomeScreenOptions} />
        <RootStack.Screen name="HomeScreen" component={HomeScreen} options={homeScreenOptions} />
        <RootStack.Screen name="ForecastScreen" component={ForecastScreen} options={forecastScreenOptions} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
