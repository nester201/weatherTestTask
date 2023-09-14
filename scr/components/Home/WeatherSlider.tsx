import React, {memo, useCallback, useMemo} from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import style from '../../theme/style';
import colors from '../../theme/colors';
import BackgroundGradient from '../ui/BackgroundGradient';
import {useSelector} from 'react-redux';
import {selectWeather} from '../../redux/weather/selectors';
import {IWeather} from '../../interfaces /IWeather';
import WeatherSliderItem from './WeatherSliderItem';
import dayjs from 'dayjs';

type Props = {
  forecast?: IWeather[];
};
const WeatherSlider: React.FC<Props> = ({forecast}) => {
  const weather = useSelector(selectWeather.getTodayWeather);
  const currentHour = dayjs().hour();

  const filteredWeatherTime = useMemo(
    () => weather?.filter(item => dayjs(item.time).hour() >= currentHour),
    [weather, currentHour]
  );

  const renderResults: ListRenderItem<IWeather> = useCallback(({item}) => {
    return <WeatherSliderItem item={item} />;
  }, []);

  return (
    <BackgroundGradient style={styles.container} gradientColors={['#129fe6', '#24acf0']}>
      <FlatList
        data={forecast ? forecast : filteredWeatherTime}
        renderItem={renderResults}
        horizontal
        contentContainerStyle={styles.flexContainer}
      />
    </BackgroundGradient>
  );
};

export default memo(WeatherSlider);

const styles = StyleSheet.create({
  container: {
    ...style.boxShadow,
    height: 130,
    borderRadius: 17,
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    gap: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  flexContainer: {
    gap: 10,
  },
});
