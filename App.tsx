import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'react-native-elements';
import { theme } from './components';

import Welcome from './screens/Welcome';
import LoginTeacher from './screens/LoginTeacher';
import LoginStudent from './screens/LoginStudent';
import SignupTeacher from './screens/SignupTeacher';
import SignupStudent from './screens/SignupStudent';
import Home from './screens/Home';

export type StackParamList = {
  Welcome      : undefined
  LoginTeacher : undefined
  LoginStudent : undefined
  SignupTeacher: undefined
  SignupStudent: undefined
  Home         : undefined
}

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

declare module 'react-native-elements' {
  export interface Colors {
    background: string;
    border: string;
    text: string;
    altText: string;
    danger: string;
  }
  export interface FullTheme {
    colors: RecursivePartial<Colors>;
  }
}

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem('state');
        savedStateString && setInitialState(JSON.parse(savedStateString));
      } finally { setIsReady(true) }
    };
    !isReady && restoreState();
  }, [isReady]);

  if (!isReady) return null;

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer
          initialState={initialState}
          onStateChange={state => {
            AsyncStorage.setItem('state', JSON.stringify(state));
          }}
        >
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="LoginTeacher" component={LoginTeacher} />
            <Stack.Screen name="LoginStudent" component={LoginStudent} />
            <Stack.Screen name="SignupTeacher" component={SignupTeacher} />
            <Stack.Screen name="SignupStudent" component={SignupStudent} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}