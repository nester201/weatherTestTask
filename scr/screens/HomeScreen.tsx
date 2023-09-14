import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
import {useNavigationApp} from '../hooks/useNavigationApp';

const HomeScreen = () => {
  const city = useSelector(selectCity.getCity);
  const {navigate} = useNavigationApp();
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

  const onPressForecast = useCallback(() => {
    navigate('ForecastScreen');
  }, [navigate]);

  return (
    <BackgroundGradient style={styles.container}>
      <View style={styles.header}>
        <BackButton removeReduxState />
        <View style={styles.wrapper}>
          <FrameSVG width={40} height={40} fill={colors.borderColor} />
          <Text style={styles.text}>{city?.name}</Text>
        </View>
      </View>
      <View style={styles.actionWrapper}>
        <TouchableOpacity onPress={onPressForecast}>
          <Text style={styles.actionText}>Forecast days</Text>
        </TouchableOpacity>
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  actionWrapper: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    flex: 0.2,
  },
  actionText: {
    ...style.text,
    fontSize: 18,
    lineHeight: 20,
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
