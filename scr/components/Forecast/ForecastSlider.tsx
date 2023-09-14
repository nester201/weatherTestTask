import React, {memo, useCallback} from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import {IWeather} from '../../interfaces /IWeather';
import ForecastSliderItem from './ForecastSliderItem';

type Props = {
  forecast: IWeather[][];
};

const ForecastSlider: React.FC<Props> = ({forecast}) => {
  const renderResults: ListRenderItem<IWeather[]> = useCallback(({item}) => {
    return <ForecastSliderItem weather={item} />;
  }, []);

  return <FlatList data={forecast} renderItem={renderResults} contentContainerStyle={styles.container} />;
};

export default memo(ForecastSlider);

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
});
