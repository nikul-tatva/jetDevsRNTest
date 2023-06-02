import React from 'react'
import {
  NavigationContainer, createNavigationContainerRef
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigatorParamList } from './navigation-routes'
import LoginScreen from '../screens/login-screen/loginScreen'
import { BottomTab } from './bottom-tab-navigator'

const Stack = createNativeStackNavigator<NavigatorParamList>()

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="LOGIN_SCREEN" component={LoginScreen} />
      <Stack.Screen name="BOTTOM_TABS" component={BottomTab} />
    </Stack.Navigator>
  )
}

type NavigationProps = Partial<React.ComponentProps<typeof NavigationContainer>>
export const navigationRef = createNavigationContainerRef()

export function AppNavigator(props: NavigationProps) {
  return (
    <NavigationContainer
      ref={navigationRef}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = 'AppNavigator'
