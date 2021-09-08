import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Icon, Image, withTheme } from 'react-native-elements';
import { Text, PrimaryInput, PrimaryButton } from '../../components';

import { useFonts, NotoSans_700Bold } from '@expo-google-fonts/noto-sans';
import Logo from '../../assets/logo.png';

import { StyleProp, TextStyle } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FullTheme } from 'react-native-elements';
import type { StackParamList } from '../../App';

type Props = (
  { theme: FullTheme } &
  NativeStackScreenProps<StackParamList, 'LoginStudent'>
);

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;

export default withTheme(LoginStudent, '');

function LoginStudent({ navigation, theme }: Props) {
  const [fontsLoaded] = useFonts({ NotoSans_700Bold });
  const styleFontNotoSans = {
    ...(fontsLoaded && { fontFamily: 'NotoSans_700Bold' }),
    fontWeight: 'bold',
  } as StyleProp<TextStyle>;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Image source={Logo} style={[styles.logo, { marginTop: 32 }]} />

        <Text h2 style={[styleFontNotoSans, { color: theme.colors.primary }]}>
          Student Mode
        </Text>

        <View style={{ width: '100%', flexShrink: 1 }}>
          <ScrollView>
            <PrimaryInput
              placeholder='Username'
              leftIcon={<Icon name='user-alt'/>}
            />
            <PrimaryInput
              placeholder='Password'
              leftIcon={<Icon name='lock'/>}
              secureTextEntry={true}
              containerStyle={{ marginTop: 16 }}
            />
          </ScrollView>
          <PrimaryButton
            title='Log in'
            containerStyle={{ marginTop: 16 }}
            onPress={() => navigation.navigate('Home')}
          />
        </View>

        <View style={{ width: '100%' }}>

          <Text style={{ alignSelf: 'center' }}>
            Need an account?&nbsp;
            <Text
              style={{
                color: theme.colors.primary,
                textDecorationLine: 'underline'
              }}
              onPress={() => navigation.navigate('SignupStudent')}
            >
              Sign up
            </Text>
          </Text>

          <Text style={{ marginTop: 16, fontWeight: 'bold' }}>
            <Icon name='angle-left' size={14} />
            &nbsp;
            <Text
              style={{ textDecorationLine: 'underline' }}
              onPress={() => navigation.goBack()}
            >
              Back
            </Text>
          </Text>

        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    width: windowWidth * .6,
    height: windowWidth * .6 / 323 * 67,
    alignSelf: 'center'
  }
});