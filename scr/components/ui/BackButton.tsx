import React, {memo, useCallback} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowSVG from '../../assets/icons/arrow.svg';
import colors from '../../theme/colors';

const BackButton: React.FC = () => {
  const navigation = useNavigation();

  const handlePressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

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
