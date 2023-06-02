import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, ImageStyle, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import { Icon } from '@rneui/themed';
import {horizontalScale, verticalScale} from '../utils/scaling';
import {colors} from '../utils/theme';
import HomeScreen from '../screens/home-screen/homeScreen';
import FavoriteScreen from '../screens/favorite-screen/favoriteScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type TabParamList = {
  HOME_SCREEN: any;
  FAVORITE_SCREEN: any;
};

const Tab = createBottomTabNavigator<TabParamList>();

export function BottomTab() {
  const insets = useSafeAreaInsets()
  const getIconName = (route: any, focused: boolean) => {
    let icon = '';

    if (route.name === 'HOME_SCREEN') {
      icon = focused ? 'home-filled' : 'home';
    } else if (route.name === 'FAVORITE_SCREEN') {
      icon = focused ? 'star-fill' : 'star';
    }
    return icon;
  }
  return (
    <Tab.Navigator
      initialRouteName="HOME_SCREEN"
      screenOptions={({route, navigation}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
        tabBarIcon: ({focused}) => {
          return (
            <Icon
              name={getIconName(route, focused)}
              type={getIconName(route, focused) === 'home-filled' ? 'material' : 'octicon' }
              color={colors.primary}
              size={horizontalScale(20)}
            />
          );
        },
        headerShown: true,
        header: () => (
            <View style={{ ...styles.headerView, paddingTop: insets.top + verticalScale(5) }}>
            <Image
              style={styles.headerImage}
              source={require('../assets/jetappiconsmall.png')}
            />
            </View>
        ),
        tabBarLabel: ({focused}) => (
          <Text
            style={{
              ...styles.tabLabel,
              fontWeight: focused ? '700' : '400',
            }}>
            {route.name === 'HOME_SCREEN' ? 'Home' : 'Favorite'}
          </Text>
        ),
        tabBarStyle: [styles.tabContainer]
      })}>
      <Tab.Screen
        name="HOME_SCREEN"
        options={({ navigation }) => ({
          title: 'Home',
          tabBarAllowFontScaling: true,
          tabBarItemStyle: { ...styles.tabItemStyle, borderTopColor: navigation.isFocused() ? colors.primary : colors.white }
        })}
        component={HomeScreen}
      />
      <Tab.Screen
        name="FAVORITE_SCREEN"
        options={({ navigation }) => ({
          title: 'Favorite',
          tabBarAllowFontScaling: true,
          tabBarItemStyle: { ...styles.tabItemStyle, borderTopColor: navigation.isFocused() ? colors.primary : colors.white }
        })}
        component={FavoriteScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: colors.white,
    borderTopWidth: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(10)
    },
    shadowOpacity: 0.5,
    shadowRadius: verticalScale(12),
    elevation: 14
  } as ViewStyle,
  tabLabel: {
    color: colors.primary,
    fontSize: verticalScale(11),
  } as TextStyle,
  logoWrapper: {
    alignSelf:'center',
    padding: horizontalScale(20),
    backgroundColor: colors.white,
    borderRadius: 90
  } as ViewStyle,
  headerImage: {
    width: horizontalScale(15),
    aspectRatio: 1,
    resizeMode: 'cover',
    alignSelf: 'center',
    backgroundColor: colors.white
  } as ImageStyle,
  headerView: {
    width: '100%',
    backgroundColor: colors.white,
    paddingBottom: verticalScale(10),
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: verticalScale(5)
    },
    shadowOpacity: 0.1,
    shadowRadius: verticalScale(5),
    elevation: 6,
  } as ViewStyle,
  tabItemStyle: {
    borderTopWidth: 3, 
    paddingTop: verticalScale(8)
  } as ViewStyle
});
