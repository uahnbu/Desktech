import React from 'react';
import { StyleSheet, SafeAreaView, Dimensions, View } from 'react-native';
import { Image, Text, withTheme } from 'react-native-elements';
import { PrimaryButton, SecondaryButton } from '../../components';

import { useFonts, NotoSans_700Bold } from '@expo-google-fonts/noto-sans';
import Logo from '../../assets/logo.png';
import Cover from './assets/cover.png';

import { StyleProp, TextStyle } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FullTheme } from 'react-native-elements';
import type { StackParamList } from '../../App';

type Props = (
  { theme: FullTheme } &
  NativeStackScreenProps<StackParamList, 'Welcome'> 
);

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;

export default withTheme(Welcome, '');

function Welcome({ navigation, theme }: Props) {
  const [fontsLoaded] = useFonts({ NotoSans_700Bold });
  const styleFontNotoSans = {
    ...(fontsLoaded && { fontFamily: 'NotoSans_700Bold' }),
    fontWeight: 'bold',
  } as StyleProp<TextStyle>;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Image source={Logo} style={styles.logo} />
        <Image source={Cover} style={styles.cover} />

        <Text h1 style={styleFontNotoSans}>Welcome</Text>

        <View style={{ width: '100%' }}>
          <SecondaryButton
            title='Teacher Mode'
            onPress={() => navigation.navigate('LoginTeacher')}
            buttonStyle={{ backgroundColor: theme.colors.secondary }}
          />
          <PrimaryButton
            title='Student Mode'
            onPress={() => navigation.navigate('LoginStudent')}
            containerStyle={{ marginTop: 16 }}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    width: windowWidth * .6,
    height: windowWidth * .6 / 323 * 67,
    alignSelf: 'center'
  },
  cover: {
    width: windowWidth,
    height: windowWidth / 400 * 272,
    alignSelf: 'center'
  }
});