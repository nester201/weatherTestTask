import React, {useCallback} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FilledView from '../components/ui/FilledView';
import MainButton from '../components/ui/MainButton';
import {useNavigationApp} from '../hooks/useNavigationApp';
import style from '../theme/style';
import CitySelect from '../components/CitySelect/CitySelect';
import {useSelector} from 'react-redux';
import {selectCity} from '../redux/city/selectors';

const WelcomeScreen = () => {
  const {navigate} = useNavigationApp();
  const city = useSelector(selectCity.getCity);

  const onPress = useCallback(() => {
    navigate('MainScreen');
  }, [navigate]);

  return (
    <FilledView style={styles.container}>
      <View style={styles.containerImage}>
        <View style={styles.header}>
          <Text style={styles.text}>Welcome to weather</Text>
        </View>
        <Image source={require('../assets/images/rain.png')} style={styles.topImage} />
        <Image source={require('../assets/images/sun.png')} />
        <Image source={require('../assets/images/union.png')} style={styles.bottomImage} />
      </View>
      <View style={styles.wrapper}>
        <CitySelect city={city} />
        <MainButton title="Let`s go" onPress={onPress} disable={!city} />
      </View>
    </FilledView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
  header: {
    zIndex: 10,
  },
  text: {
    ...style.text,
    fontSize: 30,
    lineHeight: 30,
  },
  containerImage: {
    flex: 3,
    justifyContent: 'center',
    position: 'relative',
  },
  wrapper: {
    width: '100%',
    flex: 2,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  topImage: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  bottomImage: {
    position: 'absolute',
    bottom: '10%',
  },
});
