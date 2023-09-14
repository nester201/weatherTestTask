import {IWeather} from '../interfaces /IWeather';
import {Image, StyleSheet} from 'react-native';
import React from 'react';

export const getImageWeather = (currentWeather?: IWeather) => {
  if (currentWeather && currentWeather.precipitation > 50) {
    return <Image source={require('../assets/images/group2.png')} style={styles.image} resizeMode="contain" />;
  }
  if (currentWeather && currentWeather.cloudcover < 20 && currentWeather.precipitation < 20) {
    return <Image source={require('../assets/images/sun.png')} style={styles.image} resizeMode="contain" />;
  }
  if (currentWeather && currentWeather.cloudcover > 20 && currentWeather.cloudcover < 70) {
    return <Image source={require('../assets/images/group1.png')} style={styles.image} resizeMode="contain" />;
  }
  if (currentWeather && currentWeather.cloudcover > 70) {
    return <Image source={require('../assets/images/group3.png')} style={styles.image} resizeMode="contain" />;
  }
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
