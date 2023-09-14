import React, {memo, useCallback} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowSVG from '../../assets/icons/arrow.svg';
import colors from '../../theme/colors';
import {useDispatch} from 'react-redux';
import {cityActions} from '../../redux/city/reducer';
import {weatherActions} from '../../redux/weather/reducer';

type Props = {
  removeReduxState?: boolean;
};

const BackButton: React.FC<Props> = ({removeReduxState}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePressBack = useCallback(() => {
    navigation.goBack();
    if (removeReduxState) {
      dispatch(cityActions.addCity(null));
      dispatch(weatherActions.addWeather(null));
    }
  }, [navigation, dispatch, removeReduxState]);

  return (
    <Pressable style={styles.container} onPress={handlePressBack}>
      <ArrowSVG width={40} height={40} fill={colors.black} />
    </Pressable>
  );
};

export default memo(BackButton);

const styles = StyleSheet.create({
  container: {},
});
