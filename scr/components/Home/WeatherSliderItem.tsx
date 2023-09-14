import React, {memo, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IWeather} from '../../interfaces /IWeather';
import {getImageWeather} from '../../utils/getImageWeather';
import dayjs from 'dayjs';
import style from '../../theme/style';
import colors from '../../theme/colors';

type Props = {
  item: IWeather;
};

const WeatherSliderItem: React.FC<Props> = ({item}) => {
  const currentHour = dayjs().hour();
  const cloudImage = getImageWeather(item);

  const containerStyle = useMemo(
    () => (currentHour === dayjs(item.time).hour() ? [styles.container, styles.border] : styles.container),
    [currentHour, item]
  );

  return (
    <View style={containerStyle}>
      <Text style={styles.text}>{item.temperature} °C</Text>
      <View style={styles.imageWrapper}>{cloudImage}</View>
      <Text style={styles.text}>{dayjs(item.time).format('HH.mm')}</Text>
    </View>
  );
};

export default memo(WeatherSliderItem);

const styles = StyleSheet.create({
  container: {
    width: 70,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 10,
  },
  imageWrapper: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },
  text: {
    ...style.text,
    color: colors.white,
    fontSize: 12,
    lineHeight: 12,
  },
});
