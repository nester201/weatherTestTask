import React, {memo, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BackgroundGradient from '../ui/BackgroundGradient';
import style from '../../theme/style';
import colors from '../../theme/colors';
import {IWeather} from '../../interfaces /IWeather';
import dayjs from 'dayjs';

type Props = {
  currentWeather: IWeather;
};

const Content: React.FC<Props> = ({currentWeather}) => {
  const cloud = useMemo(() => {
    if (currentWeather.cloudcover > 70 && currentWeather.precipitation > 50) {
      return 'Rain';
    }
    if (currentWeather.cloudcover < 20) {
      return 'Clear';
    }
    if (currentWeather.cloudcover > 20 && currentWeather.cloudcover < 70) {
      return 'Cloudy';
    }
    if (currentWeather.cloudcover > 70) {
      return 'Overcast';
    }
  }, [currentWeather]);

  if (currentWeather) {
    return (
      <BackgroundGradient style={styles.container} gradientColors={['#129fe6', '#24acf0']}>
        <Text style={styles.subTitle}>Today, {dayjs(currentWeather.time).format('D MMMM')}</Text>
        <Text style={styles.mainText}>{currentWeather.temperature}°</Text>
        <Text style={styles.title}>{cloud}</Text>
        <View style={styles.wrapper}>
          <Text style={styles.subTitle}>Precipitation:</Text>
          <Text style={styles.subTitle}>{currentWeather.precipitation} %</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.subTitle}>Wind speed:</Text>
          <Text style={styles.subTitle}>{currentWeather.windspeed_10m} km/h</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.subTitle}>Relative humidity:</Text>
          <Text style={styles.subTitle}>{currentWeather.relativehumidity} %</Text>
        </View>
      </BackgroundGradient>
    );
  }
  return null;
};

export default memo(Content);

const styles = StyleSheet.create({
  container: {
    ...style.boxShadow,
    flex: 1,
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    paddingVertical: 30,
    alignItems: 'center',
    gap: 20,
  },
  title: {
    ...style.text,
    ...style.textWithShadow,
    fontSize: 26,
    lineHeight: 26,
    color: colors.white,
  },
  mainText: {
    ...style.text,
    fontSize: 90,
    lineHeight: 90,
    color: colors.white,
    fontStyle: 'italic',
  },
  subTitle: {
    ...style.text,
    ...style.textWithShadow,
    fontSize: 18,
    fontWeight: '500',
    color: colors.white,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 20,
  },
});
