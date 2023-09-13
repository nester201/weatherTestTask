import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import BackgroundGradient from '../components/ui/BackgroundGradient';
import FrameSVG from '../assets/icons/frame.svg';
import colors from '../theme/colors';
import {useSelector} from 'react-redux';
import {selectCity} from '../redux/city/selectors';
import style from '../theme/style';
import {getWeather} from '../services/getWeather';
import {IWeather} from '../interfaces /IWeather';
import dayjs from 'dayjs';
import Content from '../components/Home/Content';

const MainScreen = () => {
  const city = useSelector(selectCity.getCity);
  const [currentWeather, setCurrentWeather] = useState<IWeather>();

  useEffect(() => {
    if (city) {
      const get = async () => {
        const weather = await getWeather(city);
        if (weather) {
          const currentHour = dayjs().hour();
          const currentWeather = weather.find(item => dayjs(item.time).hour() === currentHour);
          setCurrentWeather(currentWeather);
        }
      };
      get();
    }
  }, [city]);

  return (
    <BackgroundGradient style={styles.container}>
      <View style={styles.header}>
        <FrameSVG width={40} height={40} fill={colors.borderColor} />
        <Text style={styles.text}>{city?.name}</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={require('../assets/images/group1.png')} />
      </View>
      <View style={styles.content}>{currentWeather && <Content currentWeather={currentWeather} />}</View>
    </BackgroundGradient>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  text: {
    ...style.text,
    fontSize: 22,
    lineHeight: 22,
    color: colors.borderColor,
  },
  imageWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 3,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
});
