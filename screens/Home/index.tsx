import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Divider, Icon, withTheme } from 'react-native-elements';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';

import Classroom from './screens/Classroom';

import type { IconProps, FullTheme } from 'react-native-elements';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DrawerContentComponentProps, DrawerNavigationOptions } from '@react-navigation/drawer';
import type { StackParamList } from '../../App';

type Props = (
  { theme: FullTheme } &
  NativeStackScreenProps<StackParamList, 'Home'> 
);

export type DrawerParamList = {
  'Classroom' : undefined
  'Profile'   : undefined
  'My results': undefined
  'Parents&apos; notification': undefined
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default withTheme(Home, '');

function Home({ navigation, theme }: Props) {
  const drawerScreenOptions = {
    drawerActiveTintColor: theme.colors.white,
    drawerInactiveTintColor: theme.colors.white,
    drawerInactiveBackgroundColor: theme.colors.white + '9',
    drawerPosition: 'right',
    drawerStyle: {
      backgroundColor: 'transparent',
    },
    headerShown: false,
    swipeEnabled: false
  } as DrawerNavigationOptions;

  const DrawerCustomContent = (props: DrawerContentComponentProps) => (
    <LinearGradient style={styles.menu} colors={[
      theme.colors.primary as string,
      theme.colors.secondary as string,
    ]}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label=''
          icon={() => (
            <Icon name='close' type='font-awesome' color={theme.colors.white} />
          )}
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Divider style={{ marginLeft: '5%', width: '90%' }}/>
      <DrawerItem
        label='Sign out'
        icon={() => <Icon name='sign-out-alt'/>}
        onPress={() => navigation.navigate('Welcome')}
      />
    </LinearGradient>
  );

  const WhiteIcon = (props: IconProps) => (
    <Icon {...props} color={theme.colors.white} />
  );

  return (
    <Drawer.Navigator
      screenOptions={drawerScreenOptions}
      drawerContent={props => <DrawerCustomContent {...props} />}
    >
      <Drawer.Screen name='Classroom' component={Classroom} options={{
        drawerIcon: () => <WhiteIcon name='book'/>
      }} />
      <Drawer.Screen name='Profile' component={Classroom} options={{
        drawerIcon: () => <WhiteIcon name='user-circle' type='font-awesome' />
      }} />
      <Drawer.Screen name='My results' component={Classroom} options={{
        drawerIcon: () => <WhiteIcon name='chart-pie'/>
      }} />
      <Drawer.Screen
        name='Parents&apos; notification'
        component={Classroom}
        options={{ drawerIcon: () => <WhiteIcon name='sms'/> }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    ...(Platform.OS !== 'web' && {
      borderTopLeftRadius: 32,
      borderBottomLeftRadius: 32
    }),
  }
});