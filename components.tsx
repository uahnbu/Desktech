import React from 'react';
import { View } from 'react-native';
import { Button, Input, Text as BaseText } from 'react-native-elements';

import type { ViewProps } from 'react-native';
import type { ButtonProps, InputProps, TextProps } from 'react-native-elements';

export function Text(props: TextProps & { children?: React.ReactNode }) {
  return <BaseText {...props} style={[{ fontSize: 18 }, props.style]} />
}

export function PrimaryButton(props: ButtonProps) {
  return (
    <Button {...props}
      titleStyle={[{ marginHorizontal: 'auto' }, props.titleStyle]}
      buttonStyle={[
        { paddingVertical: 16, borderRadius: 8 },
        props.buttonStyle
      ]}
      containerStyle={[{
        borderRadius: 8,
        shadowColor: primaryColor,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }, props.containerStyle]}
    />
  );
}

export function SecondaryButton(props: ButtonProps) {
  return (
    <PrimaryButton {...props} buttonStyle={[
      { backgroundColor: secondaryColor },
      props.buttonStyle
    ]} />
  )
}

export function PrimaryInput(props: InputProps) {
  return (
    <Input {...props}
      style={{ marginTop: 16 }}
      inputStyle={[{ marginLeft: 8 }, props.inputStyle]}
      containerStyle={[
        { backgroundColor: primaryColor + 1, borderRadius: 8 },
        props.containerStyle
      ]}
      inputContainerStyle={[
        { borderBottomWidth: 0 },
        props.inputContainerStyle
      ]}
    />
  );
}

export function SecondaryInput(props: InputProps) {
  return (
    <PrimaryInput {...props} containerStyle={[
      { backgroundColor: secondaryColor + 1 },
      props.containerStyle
    ]} />
  );
}

export function Divider(props: ViewProps & { children?: React.ReactNode}) {
  return (
    <View style={{
      marginVertical: 16,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <View style={{
        flex: 1,
        height: 1,
        backgroundColor: '#86939e'
      }} />
      <Text {...props} style={{ paddingHorizontal: 16, fontSize: 14 }} />
      <View style={{
        flex: 1,
        height: 1,
        backgroundColor: '#86939e'
      }} />
    </View>
  );
}

const primaryColor = '#f52', secondaryColor = '#f90';

export const theme = {
  Icon: {
    type: 'font-awesome-5'
  },
  colors: {
    primary: primaryColor,
    secondary: secondaryColor
  }
};