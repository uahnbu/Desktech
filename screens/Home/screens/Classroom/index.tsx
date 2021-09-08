import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import Dashboard from './screens/Dashboard';
import Tasks from './screens/Tasks';

import type { DrawerNavigationProp, DrawerScreenProps } from '@react-navigation/drawer';
import type { DrawerParamList } from '../..';

type Props = DrawerScreenProps<DrawerParamList, 'Classroom'>;

type ScreenParams = {
  drawerNavigation: DrawerNavigationProp<DrawerParamList, 'Classroom'>
};

export type StackParamList = {
  Dashboard: ScreenParams
  Subjects : ScreenParams
  Quizzie  : ScreenParams
  Deskmind : ScreenParams
  Materials: ScreenParams
  Tasks    : ScreenParams
  Settings : ScreenParams
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function Classroom({ navigation }: Props) {
  const params = { drawerNavigation: navigation };
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Dashboard'
        component={Dashboard}
        initialParams={params}
      />
      <Stack.Screen
        name='Tasks'
        component={Tasks}
        initialParams={params}
      />
    </Stack.Navigator>
  );
}