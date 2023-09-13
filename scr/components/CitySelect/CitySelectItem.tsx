import React, {memo, useCallback} from 'react';
import {ICity} from '../../interfaces /ICity';
import colors from '../../theme/colors';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {cityActions} from '../../redux/city/reducer';

interface Props {
  item: ICity;
  onClose: () => void;
}

const CitySelectItem: React.FC<Props> = ({item, onClose}) => {
  const dispatch = useDispatch();

  const onPress = useCallback(() => {
    dispatch(cityActions.addCity(item));
    onClose();
  }, [dispatch, item, onClose]);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text>
        <Text style={styles.city}>{item.name}</Text>
        &nbsp;&nbsp;&nbsp;
        <Text style={styles.country}>{item.country}</Text>
      </Text>
    </Pressable>
  );
};

export default memo(CitySelectItem);

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  city: {
    fontSize: 16,
    color: colors.black,
  },
  country: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 1,
  },
});
