import React, {memo} from 'react';
import {TextInput, TextInputProps, TextStyle} from 'react-native';
import colors from '../../theme/colors';

const Input: React.FC<TextInputProps> = props => {
  return <TextInput {...props} style={textStyle} placeholderTextColor={colors.placeholder} />;
};

export default memo(Input);

const textStyle: TextStyle = {
  backgroundColor: colors.white,
  fontSize: 18,
  borderRadius: 5,
  borderColor: colors.borderColor,
  borderStyle: 'solid',
  borderWidth: 1,
  paddingHorizontal: 20,
  paddingTop: 14,
  paddingBottom: 14,
  color: colors.black,
};
