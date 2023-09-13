import React, {memo, ReactNode, useMemo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import colors from '../../theme/colors';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

const FilledView: React.FC<Props> = ({children, style}) => {
  const containerStyle = useMemo(() => [styles.container, style && style], [style]);

  return <View style={containerStyle}>{children}</View>;
};

export default memo(FilledView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
