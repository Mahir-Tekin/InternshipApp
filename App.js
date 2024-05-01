import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import ProfileScreen from './Screens/ProfileScreen';
import HomeScreen from './Screens/HomeScreen';
import AdvertsScreen from './Screens/AdvertsScreen';
import CreatePost from './Screens/CreatePost';
import ApplicationScreen from './Screens/ApplicationScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack= createNativeStackNavigator();

function HomeStackScreens(){
  return(
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen}/>
      <HomeStack.Screen name="Post" component={CreatePost}/>
    </HomeStack.Navigator>
  );
}

function StackScreens() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

function TabScreens() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: {
          backgroundColor: '#1C1678',  // Set the header background color
        },
        headerTitleStyle: {
          color: '#FFFFFF',  // Set the header text color
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user-o';
          } else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Advert') {
            iconName = focused ? 'bullhorn' : 'bullhorn';
          } else if (route.name === 'Application') {
            iconName = focused ? 'briefcase' : 'briefcase';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1C1678',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Home" component={HomeStackScreens} />
      <Tab.Screen name="Advert" component={AdvertsScreen} options={{ tabBarLabel: 'Adverts' }} />
      <Tab.Screen name="Application" component={ApplicationScreen} options={{ tabBarLabel: 'Applications' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Stack' component={StackScreens} />
          <Stack.Screen name='Tab' component={TabScreens} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // This can be adjusted to match your app's design
  },
});
