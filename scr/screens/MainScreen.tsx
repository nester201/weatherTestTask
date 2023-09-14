import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import BackgroundGradient from '../components/ui/BackgroundGradient';
import FrameSVG from '../assets/icons/frame.svg';
import colors from '../theme/colors';
import {useDispatch, useSelector} from 'react-redux';
import {selectCity} from '../redux/city/selectors';
import style from '../theme/style';
import {getCurrentWeather} from '../services/getWeather';
import {IWeather} from '../interfaces /IWeather';
import dayjs from 'dayjs';
import Content from '../components/Home/Content';
import {getImageWeather} from '../utils/getImageWeather';
import WeatherSlider from '../components/Home/WeatherSlider';
import {weatherActions} from '../redux/weather/reducer';
import BackButton from '../components/ui/BackButton';

const MainScreen = () => {
  const city = useSelector(selectCity.getCity);
  const [currentWeather, setCurrentWeather] = useState<IWeather>();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const cloudImage = getImageWeather(currentWeather);

  useEffect(() => {
    if (city) {
      setLoading(true);
      const get = async () => {
        const weather = await getCurrentWeather(city);
        if (weather) {
          dispatch(weatherActions.addWeather(weather));
          const currentHour = dayjs().hour();
          const currentWeather = weather.find(item => dayjs(item.time).hour() === currentHour);
          setCurrentWeather(currentWeather);
        }
      };
      get();
      setLoading(false);
    }
  }, [city, dispatch]);

  return (
    <BackgroundGradient style={styles.container}>
      <View style={styles.header}>
        <BackButton />
        <View style={styles.wrapper}>
          <FrameSVG width={40} height={40} fill={colors.borderColor} />
          <Text style={styles.text}>{city?.name}</Text>
        </View>
      </View>
      <View style={styles.imageWrapper}>
        {!loading && cloudImage ? <>{cloudImage}</> : <ActivityIndicator color={colors.white} size="large" />}
      </View>
      <View style={styles.content}>
        {!loading && currentWeather ? (
          <Content currentWeather={currentWeather} />
        ) : (
          <ActivityIndicator color={colors.white} size="large" />
        )}
        {!loading && currentWeather ? <WeatherSlider /> : <ActivityIndicator color={colors.white} size="large" />}
      </View>
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
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    gap: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    ...style.text,
    fontSize: 22,
    lineHeight: 22,
    color: colors.borderColor,
  },
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
  },
  content: {
    flex: 4,
    paddingHorizontal: 40,
    paddingBottom: 40,
    gap: 20,
  },
});
