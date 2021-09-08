import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Card, Icon, withTheme } from 'react-native-elements';
import { Text } from '../../../../../../components';

import AvatarImage from './assets/avatar.png';
import JoinClassImage from './assets/join_class.png';
import QuizzieImage from './assets/quizzie.png';
import DeskmindImage from './assets/deskmind.png';
import MaterialsImage from './assets/materials.png';
import TasksImage from './assets/tasks.png';
import SettingsImage from './assets/settings.png';

import type { ImageSourcePropType } from 'react-native';
import type { CardProps, FullTheme } from 'react-native-elements';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { StackParamList } from '../../../Classroom';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { DrawerParamList } from '../../../../../Home';

type Props = (
  { theme: FullTheme } &
  { drawerNavigation: DrawerNavigationProp<DrawerParamList, 'Classroom'> } &
  NativeStackScreenProps<StackParamList, 'Dashboard'>
);

export default withTheme(Dashboard, '');

function Dashboard({ route, navigation: stackNavigation, theme }: Props) {
  const drawerNavigation = route.params.drawerNavigation;
  const cards = [
    { title: 'JOIN CLASS'  , image: JoinClassImage, target: 'Subjects'  },
    { title: 'DESK-QUIZZIE', image: QuizzieImage  , target: 'Quizzie'   },
    { title: 'DESK-MIND'   , image: DeskmindImage , target: 'Deskmind'  },
    { title: 'MATERIALS'   , image: MaterialsImage, target: 'Materials' },
    { title: 'MY TASKS'    , image: TasksImage    , target: 'Tasks'     },
    { title: 'SETTINGS'    , image: SettingsImage , target: 'Settings'  }
  ] as const;
  const cardColors = [theme.colors.primary + '3', theme.colors.secondary];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{
        height: 'auto',
        backgroundColor: theme.colors.primary
      }}>

        <View style={styles.topbar}>
          <Avatar size='medium' rounded title='MD' source={AvatarImage} />
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

        <View style={styles.cardboard}>
          {cards.map(({ title, image, target }, index) => (
            <DashboardCard
              key  ={title}
              title={title}
              image={image}
              index={index}
              color={cardColors[+(!(index % 4) || index % 4 === 3)] as string}
              onPress={() => stackNavigation.navigate({
                name: target,
                params: { drawerNavigation }
              })}
            />
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

function DashboardCard(props: CardProps & {
  title : string
  image : ImageSourcePropType
  index : number
  color : string
  onPress: () => void
}) {
  const Title = () => (
    <Card.FeaturedTitle style={{ color: '#000', textAlign: 'center' }}>
      {props.title}
    </Card.FeaturedTitle>
  );
  const Image = () => (
    <Card.Image source={props.image} resizeMode='contain' />
  );
  return (
    <TouchableOpacity style={styles.card} onPress={props.onPress}>
      <Card {...props} containerStyle={{
        backgroundColor: props.color,
        margin: 0
      }}>
        {props.index % 2 ? <><Title/><Image/></> : <><Image/><Title/></>}
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  topbar: {
    marginTop: 32,
    paddingHorizontal: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardboard: {
    marginTop: 16,
    paddingTop: 32,
    paddingBottom: 16,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    padding: 0,
    margin: 0,
    marginBottom: 16,
    width: '45%',
    borderRadius: 32,
    overflow: 'hidden'
  }
});