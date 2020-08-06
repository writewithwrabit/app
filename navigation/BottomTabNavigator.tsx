import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import JournalScreen from '../screens/JournalScreen';
import StatsScreen from '../screens/StatsScreen';
import { BottomTabParamList, JournalParamList, StatsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Journal"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Journal"
        component={JournalNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo size={30} style={{ marginBottom: -3 }} name="typing" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={StatsNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo size={24} style={{ marginBottom: -3 }} name="bar-graph" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const JournalStack = createStackNavigator<JournalParamList>();

function JournalNavigator() {
  return (
    <JournalStack.Navigator>
      <JournalStack.Screen
        name="JournalScreen"
        component={JournalScreen}
        options={{ headerTitle: 'Journal' }}
      />
    </JournalStack.Navigator>
  );
}

const StatsStack = createStackNavigator<StatsParamList>();

function StatsNavigator() {
  return (
    <StatsStack.Navigator>
      <StatsStack.Screen
        name="StatsScreen"
        component={StatsScreen}
        options={{ headerTitle: 'Stats' }}
      />
    </StatsStack.Navigator>
  );
}
