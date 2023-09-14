import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IWeather} from '../../interfaces /IWeather';
import dayjs from 'dayjs';
import WeatherSlider from '../Home/WeatherSlider';
import style from '../../theme/style';
import colors from '../../theme/colors';

type Props = {
  weather: IWeather[];
};

const ForecastSliderItem: React.FC<Props> = ({weather}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{dayjs(weather[0].time).format('D MMMM')}</Text>
      <WeatherSlider forecast={weather} />
    </View>
  );
};

export default memo(ForecastSliderItem);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 5,
  },
  text: {
    ...style.text,
    color: colors.white,
  },
});
