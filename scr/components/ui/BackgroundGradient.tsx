import React, {ReactNode, useMemo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleProp, View, ViewStyle} from 'react-native';
import colors from '../../theme/colors';

type Props = {
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  gradientColors?: string[];
};

const gradientStart = {x: 1, y: 0};
const gradientEnd = {x: 0, y: 1};

const BackgroundGradient: React.FC<Props> = ({disabled, style, children, gradientColors}) => {
  const colorsGradient = useMemo(
    () => (gradientColors ? gradientColors : [colors.primary, colors.secondary]),
    [gradientColors]
  );
  return disabled ? (
    <View style={style}>{children}</View>
  ) : (
    <LinearGradient start={gradientStart} end={gradientEnd} colors={colorsGradient} style={style}>
      {children}
    </LinearGradient>
  );
};

export default BackgroundGradient;
