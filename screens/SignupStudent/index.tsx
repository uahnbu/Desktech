import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Icon, Image, withTheme } from 'react-native-elements';
import { Divider, PrimaryButton, SecondaryButton, PrimaryInput, Text } from '../../components';

import { useFonts, NotoSans_700Bold } from '@expo-google-fonts/noto-sans';
import Google from './assets/google.png';

import type { StyleProp, TextStyle } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FullTheme } from 'react-native-elements';
import type { StackParamList } from '../../App';

type Props = (
  { theme: FullTheme } &
  NativeStackScreenProps<StackParamList, 'SignupStudent'>
);

export default withTheme(LoginStudent, '');

function LoginStudent({ navigation, theme }: Props) {
  const [fontsLoaded] = useFonts({ NotoSans_700Bold });
  const styleFontNotoSans = {
    ...(fontsLoaded && { fontFamily: 'NotoSans_700Bold' }),
    fontWeight: 'bold'
  } as StyleProp<TextStyle>;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <View style={styles.topbar}>
          <Text h2 style={styleFontNotoSans}>Sign up</Text>
          <Button
            type="clear"
            icon={<Icon name='close' type='font-awesome' />}
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{ width: '100%' }}>
          <PrimaryButton
            title='Continue with Google'
            icon={<Image source={Google} style={{ width: 24, height: 24 }} />}
            buttonStyle={{ backgroundColor: theme.colors.white }}
            containerStyle={{ shadowColor: theme.colors.grey5 }}
            titleStyle={{ color: theme.colors.black, fontWeight: 'bold' }}
          />
          <SecondaryButton
            title='Continue with Amazon'
            icon={<Icon name='amazon'/>}
            containerStyle={{ marginTop: 16 }}
            titleStyle={{ color: theme.colors.black, fontWeight: 'bold' }}
          />
        </View>

        <Divider>OR</Divider>

        <View style={{ width: '100%', flexShrink: 1 }}>
          <ScrollView>
            <PrimaryInput
              placeholder='Username'
              leftIcon={<Icon name='user-alt'/>}
            />
            <PrimaryInput
              placeholder='Email'
              leftIcon={<Icon name='user-alt'/>}
              containerStyle={{ marginTop: 16 }}
            />
            <PrimaryInput
              placeholder='Password'
              leftIcon={<Icon name='lock'/>}
              secureTextEntry={true}
              containerStyle={{ marginTop: 16 }}
            />
          </ScrollView>
          <PrimaryButton title='Sign up' containerStyle={{ marginTop: 16 }} />
        </View>

        <Text style={{ textAlign: 'center', fontSize: 14 }}>
          By signing up, you agree to our&nbsp;
          <Text style={{
            color: theme.colors.primary,
            fontSize: 14,
            textDecorationLine: 'underline'
          }}>
            terms and conditions
          </Text>
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topbar: {
    marginBottom: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});