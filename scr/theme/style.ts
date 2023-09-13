import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {TextStyle} from 'react-native';
import colors from './colors';

const boxShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.15,
  shadowRadius: 10,

  elevation: 5,
};

const text: TextStyle = {
  fontWeight: '400',
  color: colors.black,
  fontStyle: 'normal',
  fontSize: 16,
  lineHeight: 24,
  textAlign: 'center',
};
const textWithShadow: TextStyle = {
  fontSize: 24,
  textShadowColor: 'rgba(0, 0, 0, 0.5)',
  textShadowOffset: {width: 2, height: 2},
  textShadowRadius: 4,
};

const header: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 18,
  },
  headerTransparent: false,
};

export default {
  header,
  boxShadow,
  text,
  textWithShadow,
};
