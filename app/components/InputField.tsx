import React from 'react';
import { StyleProp, StyleSheet, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Icon } from '@rneui/themed';

import { colors } from '../utils/theme';
import { horizontalScale, verticalScale } from '../utils/scaling';
import { TextField } from 'rn-material-ui-textfield';

export interface TextFieldProps extends TextInputProps {
    leftIcon?: string,
    leftIconType?: string,
    placeholder?: string,
    label: string,
    inputStyle?: StyleProp<TextStyle>,
    tintColor?: string,
    baseColor?: string,
    value: string,
    error?: string,
    forwardedRef?: any,
    textColor?: string,
    fontSize?: number,
    labelFontSize?: number,
    labelTextStyle?: StyleProp<TextStyle>,
    onChangeText:(e: any) => void,
    onFocus?: (e: any) => void,
    onBlur?: (e: any) => void,
    secureTextEntry?: boolean,
    isFocused?: boolean
  }

function InputField(props: TextFieldProps) {
  const {
    forwardedRef,
    leftIcon,
    leftIconType,
    label,
    value,
    error,
    onChangeText,
    onFocus,
    onBlur,
    onSubmitEditing,
    textColor = colors.textBlack,
    fontSize = verticalScale(16),
    labelFontSize = verticalScale(14),
    tintColor = colors.gray,
    baseColor = colors.gray,
    labelTextStyle = styles.inputLabel,
    returnKeyType = 'done',
    secureTextEntry = false,
    maxLength,
    keyboardType,
    isFocused,
    ...rest
  } = props;


  const renderLeftItem = () => {
    const iconColor = isFocused ? colors.primary : colors.gray;
    return (
      <View style={styles.leftView}>
        {leftIcon && <Icon
          name={leftIcon}
          type={leftIconType}
          color={iconColor}
          size={horizontalScale(25)}
        />}
      </View>
    );
  };

  return (
    <TextField
      label={label}
      value={value}
      error={error}
      ref={forwardedRef}
      onChangeText={onChangeText}
      onFocus={onFocus}
      onBlur={onBlur}
      textColor={textColor}
      fontSize={fontSize}
      labelFontSize={labelFontSize}
      tintColor={tintColor}
      baseColor={baseColor}
      errorColor={colors.error}
      labelTextStyle={labelTextStyle}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      renderLeftAccessory={renderLeftItem}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
      lineWidth={1}
      activeLineWidth={1}
      disabledLineWidth={1}
      keyboardType={keyboardType}
      {...rest}
    />
  );
}

export default InputField;

const styles = StyleSheet.create({
  inputLabel: {
    paddingTop: 3,
    color: colors.white,
  },
  inputText: {
    fontSize: verticalScale(14),
  },
  leftView: { paddingEnd: 10 },
});