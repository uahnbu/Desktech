import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Icon, withTheme } from 'react-native-elements';
import { Text } from '../../../../../../components';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { FullTheme } from 'react-native-elements';
import type { StackParamList } from '../../../Classroom';

type Props = (
  { theme: FullTheme } &
  NativeStackScreenProps<StackParamList, 'Tasks'>
);

export default withTheme(LoginStudent, '');

function LoginStudent({ route, navigation: stackNavigation, theme }: Props) {
  const drawerNavigation = route.params.drawerNavigation;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{
        height: 'auto',
        backgroundColor: theme.colors.primary
      }}>

        <View style={styles.topbar}>
          <Text style={{ marginTop: 16, fontWeight: 'bold' }}>
            <Icon name='angle-left' size={14} />
            &nbsp;
            <Text
              style={{ textDecorationLine: 'underline' }}
              onPress={() => stackNavigation.goBack()}
            >
              Tasks
            </Text>
          </Text>
          <Button
            type='clear'
            icon={<Icon name='search'/>}
            containerStyle={{ marginLeft: 'auto' }}
          />
          <Button type='clear' icon={<Icon name='bell'/>} />
          <Button
            type='clear'
            icon={<Icon name='bars'/>}
            onPress={() => drawerNavigation.openDrawer()}
          />
        </View>

        <View style={{ marginHorizontal: 16, marginTop: 8 }}>
          <Text style={{ color: theme.colors.white, fontSize: 14 }}>
            Hello,
          </Text>
          <Text style={{ color: theme.colors.white }}>Desk-kul</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topbar: {
    marginTop: 32,
    paddingHorizontal: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  }
});