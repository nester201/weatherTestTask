import React, {memo, useMemo} from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import colors from '../../theme/colors';

type Props = {
  onPress: () => void;
  title: string;
  loading?: boolean;
  style?: ViewStyle;
  border?: boolean;
  disable?: boolean;
};

const MainButton: React.FC<Props> = ({onPress, title, loading, style, border, disable}) => {
  const containerMainStyle = useMemo(
    () => [containerStyle, style && style, disable && styles.disable, border && styles.containerBorder],
    [disable, style, border]
  );

  return (
    <TouchableOpacity style={containerMainStyle} onPress={onPress} disabled={disable}>
      {loading ? <ActivityIndicator size="small" color={colors.white} /> : <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default memo(MainButton);

const containerStyle: ViewStyle = {
  paddingVertical: 13,
  paddingHorizontal: 15,
  backgroundColor: colors.violet,
  borderRadius: 24,
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  containerBorder: {
    ...containerStyle,
    borderWidth: 1,
    borderColor: colors.white,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.white,
  },
  disable: {
    backgroundColor: colors.placeholder,
  },
});
