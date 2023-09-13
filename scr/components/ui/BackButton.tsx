import React, {memo, useCallback} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BackButton: React.FC = () => {
  const navigation = useNavigation();

  const handlePressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Pressable style={styles.container} onPress={handlePressBack}>
      <Text>back</Text>
    </Pressable>
  );
};

export default memo(BackButton);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 30,
    zIndex: 5,
  },
});
